import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

interface Request {
  title: string
  value: number
  type: 'income' | 'outcome'
}

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute( {title, value, type }: Request): Transaction {
    if (this.transactionsRepository.getBalance().total < 0) {
      throw Error('Você não tem dinheiro para realizar essa transação')
    }

    const transaction = this.transactionsRepository.create({ title, value, type })

    return transaction    
  }
}

export default CreateTransactionService;
