import { Routes } from '@angular/router';
import { TransactionList } from './transaction-list/transaction-list';
import { AddTransaction } from './add-transaction/add-transaction';

export const routes: Routes = [
  { path: '', redirectTo: 'transactions', pathMatch: 'full' },
  { path: 'transactions', component: TransactionList },
  { path: 'add', component: AddTransaction }
];

