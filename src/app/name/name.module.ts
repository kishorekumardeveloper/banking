import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankComponent } from './component/bank/bank.component';
import { FinanceComponent } from './component/finance/finance.component';
import { NameRoutingModule } from './name-routing.module';


@NgModule({
  declarations: [BankComponent,FinanceComponent],
  imports: [
    CommonModule,
    NameRoutingModule
  ]
})
export class NameModule { }





