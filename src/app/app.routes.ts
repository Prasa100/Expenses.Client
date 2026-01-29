import { Routes } from '@angular/router';
import { Login } from './Components/login/login';
import { Signup } from './Components/signup/signup';
import { TransactionList } from './Components/transaction-list/transaction-list';
import { TransactionForm } from './Components/transaction-form/transaction-form';

export const routes: Routes = [
  { path: '', redirectTo: 'transactions', pathMatch: 'full' },

  { path: 'login', component: Login },
  { path: 'signup', component: Signup },
  { path: 'transactions', component: TransactionList },
  { path: 'add', component: TransactionForm },
  { path: 'edit/:id', component: TransactionForm },

  { path: '**', redirectTo: 'transactions' }
];
