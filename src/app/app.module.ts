import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReferComponent } from './refer/refer.component';
import { ReferralsComponent } from './referrals/referrals.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule, HTTP_INTERCEPTORS }    from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { HmReferralsComponent } from './hm-referrals/hm-referrals.component';
import { HmJobsComponent } from './hm-jobs/hm-jobs.component';
import { HmReferralsStatusComponent } from './hm-referrals-status/hm-referrals-status.component';
import { TokenInterceptorService } from './services/interceptor/token-interceptor.service';
import { ReferFormComponent } from './refer-form/refer-form.component';
// import { ReactiveFormsModule } from '@angular/forms';

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
    HmReferralsStatusComponent,
    ReferFormComponent,
    // ReactiveFormsModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
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
