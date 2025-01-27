import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from '../lib/axios';

interface TransactionsProps {
  id: number;
  description: string;
  type: string;
  category: 'income' | 'outcome';
  price: number;
  createdAt: string;
}

interface CreateTransactionInput {
  description: string;
  price: number;
  type: string;
  category: 'income' | 'outcome';
}

interface TransactionsContextType {
  transactions: TransactionsProps[];
  fetchTransactions: (query?: string) => Promise<void>;
  createTransaction: (data: CreateTransactionInput) => Promise<void>;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

// eslint-disable-next-line react-refresh/only-export-components
export const TransactionsContext = createContext({} as TransactionsContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionsProps[]>([]);

  async function fetchTransactions(query?: string) {
    const response = await api.get('transactions');
    const data = response.data;

    // Filtrar localmente no frontend
    const filteredData = query
      ? data.filter((transaction: TransactionsProps) =>
          transaction.description.toLowerCase().includes(query.toLowerCase())
        )
      : data;

    setTransactions(filteredData);
  }

  async function createTransaction(data: CreateTransactionInput) {
    const { description, price, type, category } = data;

    const response = await api.post('transactions', {
      description,
      price,
      type,
      category,
      createdAt: new Date(),
    });

    setTransactions(state => [response.data, ...state]);
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchTransactions, createTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
