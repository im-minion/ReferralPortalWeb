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
import { ReferFormComponent } from './refer-form/refer-form.component';
import { HmJobsFormComponent } from './hm-jobs-form/hm-jobs-form.component';
import { HrReferralsComponent } from './hr-referrals/hr-referrals.component';
import { HrAllReferralsComponent } from './hr-all-referrals/hr-all-referrals.component';
import { AdminComponent } from './admin/admin.component';

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
    path:'referForm/:jobId',
    component: ReferFormComponent,
    canActivate: [EmployeeGuard]
  },
  {
    path: 'status',
    component: ReferralsComponent,
    canActivate: [EmployeeGuard],
  },
  {
    path: 'hm/jobs',
    component: HmJobsComponent,
    canActivate: [EmployeeGuard]
  },
  {
    path: 'hm/jobsForm',
    component: HmJobsFormComponent,
    canActivate: [EmployeeGuard]
  },
  {
    path: 'hm/referrals/:jobId',
    component: HmReferralsComponent,
    canActivate: [EmployeeGuard]
  },
  {
    path: 'hm/referralsStatus',
    component: HmReferralsStatusComponent,
    canActivate: [EmployeeGuard]
  },
  {
    path: 'hr/referrals',
    component: HrReferralsComponent,
    canActivate: [EmployeeGuard]
  },
  {
    path: 'hr/allReferrals',
    component: HrAllReferralsComponent,
    canActivate: [EmployeeGuard]
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [EmployeeGuard]
  },
  {
    path: '**',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
