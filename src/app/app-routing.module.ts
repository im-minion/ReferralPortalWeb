import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReferComponent } from './refer/refer.component';
import { ReferralsComponent } from './referrals/referrals.component';
import { RegisterComponent } from './register/register.component';
import { HmReferralsComponent } from './hm-referrals/hm-referrals.component';
import { HmJobsComponent } from './hm-jobs/hm-jobs.component';
import { HmReferralsStatusComponent } from './hm-referrals-status/hm-referrals-status.component';
import { EmployeeGuard } from './employee.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [EmployeeGuard],
  },
  {
    path: 'refer',
    component: ReferComponent,
    canActivate: [EmployeeGuard]
  },
  {
    path: 'status',
    component: ReferralsComponent,
    canActivate: [EmployeeGuard],
  },
  {
    path: 'hm/jobs',
    component: HmJobsComponent
  },
  {
    path: 'hm/referrals',
    component: HmReferralsComponent
  },
  {
    path: 'hm/referralsStatus',
    component: HmReferralsStatusComponent
  },
  {
    path: '**',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
