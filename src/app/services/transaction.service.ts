import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction';

const STORAGE_KEY = 'ft_transactions_v1';

@Injectable({ providedIn: 'root' })
export class TransactionService {
  private transactions: Transaction[] = [];

  constructor() {
    this.load();
  }

  private load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        this.transactions = JSON.parse(raw) as Transaction[];
      } else {
        // Initialize with empty array if first time
        this.transactions = [];
        this.save();
      }
    } catch (e) {
      console.error('Failed to load transactions', e);
      this.transactions = [];
    }
  }

  private save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.transactions));
    } catch (e) {
      console.error('Failed to save transactions', e);
    }
  }

  getAll(): Transaction[] {
    return [...this.transactions].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  add(transaction: Omit<Transaction, 'id'>): Transaction {
    const nextId = this.transactions.reduce((m, t) => Math.max(m, t.id), 0) + 1;
    const newTx: Transaction = {
      id: nextId,
      ...transaction
    };
    this.transactions.push(newTx);
    this.save();
    return newTx;
  }

  delete(id: number): boolean {
    const idx = this.transactions.findIndex(t => t.id === id);
    if (idx >= 0) {
      this.transactions.splice(idx, 1);
      this.save();
      return true;
    }
    return false;
  }
}
