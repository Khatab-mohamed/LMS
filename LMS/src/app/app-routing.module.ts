import { NewLoanComponent } from './loan/new-loan/new-loan.component';
import { LoanComponent } from './loan/loan.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
{ path: '', component:  LoanComponent },
{ path: 'loan/new', component: NewLoanComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
