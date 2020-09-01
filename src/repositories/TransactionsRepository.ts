import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions
  }

  public getBalance(): Balance {
    const income = this.transactions.reduce(((a, b) => b.type === 'income' ? b.value + a : a), 0)
    const outcome = this.transactions.reduce(((a, b) => b.type === 'outcome' ? b.value + a : a), 0)
    const total = income - outcome

    const balance = { income, outcome, total }

    return balance
  }

  public create({ title, value, type }: Transaction): Transaction {
    const transaction = new Transaction({ title, value, type })
    
    this.transactions.push(transaction)

    return transaction
  }
}

export default TransactionsRepository;
