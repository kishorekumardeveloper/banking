import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { DetailedHomeComponent } from './detailed-home/detailed-home.component';
import { CreatecomponetComponent } from './createcomponet/createcomponet.component'
import { BankdetailComponent } from './bankdetail/bankdetail.component'
import {CanActiveService} from './can-active.service'
import { CanDeactivate } from '@angular/router';
import {DeactiveService} from './deactive.service';
import {NameModule} from './name/name.module';

const routes: Routes = [
  { path: 'name', loadChildren: () => import('./name/name.module').then(m => m.NameModule) },

  {path:"",component:LandingComponent},
  {path:"employee",children:[
    {path:"Home",component:HomeComponent},
    {path:"home/detail/:id",component:DetailedHomeComponent},

  ]},
  

  {path:"auth/register",component:RegisterComponent},
  {path:"auth/login",component:LoginComponent,canDeactivate:[DeactiveService]},
  {path:"CreatecomponetComponent",component:CreatecomponetComponent},
  {path:"BankdetailComponent",component:BankdetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
