import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicComponent } from './app/basic/basic.component';
import { LoginComponent } from './app/login/login.component';
import { WelcomeComponent } from './app/welcome/welcome.component';
import { CalcTVAComponent } from './app/calc-tva/calc-tva.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'basic', component: BasicComponent },
  { path: 'calcTVA', component: CalcTVAComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }