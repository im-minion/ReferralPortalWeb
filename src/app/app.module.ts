import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReferComponent } from './refer/refer.component';
import { ReferralsComponent } from './referrals/referrals.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule, HTTP_INTERCEPTORS }    from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { HmReferralsComponent } from './hm-referrals/hm-referrals.component';
import { HmJobsComponent } from './hm-jobs/hm-jobs.component';
import { TokenInterceptorService } from './services/interceptor/token-interceptor.service';
import { ReferFormComponent } from './refer-form/refer-form.component';
import { HmJobsFormComponent } from './hm-jobs-form/hm-jobs-form.component';
import { HrReferralsComponent } from './hr-referrals/hr-referrals.component';
import { HrAllReferralsComponent } from './hr-all-referrals/hr-all-referrals.component';
import { AdminComponent } from './admin/admin.component';
import { ClarityModule } from '@clr/angular';
import { SeeReferralDetailsComponent } from './see-referral-details/see-referral-details.component';
import { UpdateReferralStatusComponent } from './update-referral-status/update-referral-status.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    DashboardComponent,
    ReferComponent,
    ReferralsComponent,
    RegisterComponent,
    HmReferralsComponent,
    HmJobsComponent,
    ReferFormComponent,
    HmJobsFormComponent,
    HrReferralsComponent,
    HrAllReferralsComponent,
    AdminComponent,
    SeeReferralDetailsComponent,
    UpdateReferralStatusComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
