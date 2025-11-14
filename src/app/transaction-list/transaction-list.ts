import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { Transaction } from '../models/transaction';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.html',
  styleUrls: ['./transaction-list.css'],
  standalone: true,
  imports: [CommonModule, MatTableModule, MatSortModule, MatButtonModule, MatIconModule]
})
export class TransactionList implements OnInit {
  displayedColumns: string[] = ['date', 'description', 'amount', 'type', 'actions'];
  transactions: Transaction[] = [];

  constructor(private txService: TransactionService) { }

  ngOnInit(): void {
    this.loadTransactions();
  }

  loadTransactions(): void {
    this.transactions = this.txService.getAll();
  }

  deleteTransaction(id: number): void {
    if (this.txService.delete(id)) {
      this.loadTransactions();
    }
  }
}
