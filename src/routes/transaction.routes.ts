import { Router } from 'express';

import TransactionsRepository from '../repositories/TransactionsRepository';
import CreateTransactionService from '../services/CreateTransactionService';
import Transaction from '../models/Transaction';

const transactionRouter = Router();

const transactionsRepository = new TransactionsRepository();

transactionRouter.get('/', (request, response) => {
  try {
    return transactionsRepository.all()
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

transactionRouter.post('/', (request, response) => {
  try {
    const { title, value, type } = request.body

    const transaction = transactionsRepository.create({ title, value, type })


  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default transactionRouter;
