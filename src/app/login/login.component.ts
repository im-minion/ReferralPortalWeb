import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/authentication/auth.service';
import { Employee } from '../employee';
import { ResponseTypes } from '../app.constants';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public loader: boolean = false;
  messageBool: boolean = false;
  messageType: string;
  message: string;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['dashboard']);
    }

    this.loginForm = new FormGroup({
      employeeId: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    });

  }

  login() {
    this.loader = true;
    this.authService.login(this.loginForm.value.employeeId, this.loginForm.value.password).subscribe((loginResponse: any) => {
      if ((loginResponse) && (loginResponse.employeeId)) {
        this.authService.setAuthToken(loginResponse);
        this.router.navigate(['dashboard']);
        this.messageBool = true;
        this.messageType = ResponseTypes.SUCCESS;
        this.message = 'Login';
      } else {
        this.messageBool = true;
        this.messageType = ResponseTypes.FAILED;
        this.message = 'EmployeeId or Password do not match';
      }
      this.loader = false;
    },
      (err: HttpErrorResponse) => {
        console.log(err);
        this.messageBool = true;
        this.messageType = 'FAILED';
        this.message = err.error;
        this.loader = false;
      }
    );
    this.messageBool = false;
  }

  register() {
    this.router.navigate(['register']);
  }

}
