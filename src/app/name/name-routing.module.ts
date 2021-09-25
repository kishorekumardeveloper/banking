import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankComponent } from './component/bank/bank.component';
import { FinanceComponent } from './component/finance/finance.component';

const routes: Routes = [
  { path:"bank",component:BankComponent},
  { path:"finance",component:FinanceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NameRoutingModule { }
