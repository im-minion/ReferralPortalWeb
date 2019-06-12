import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/authentication/auth.service';
import { isNullOrUndefined } from 'util';
import { Employee } from '../employee';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  employeeId: string;
  password: string;
  loader: boolean = false;
  messageBool: boolean = false;
  messageType: string;
  message: string;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.loader = true;
    this.authService.login(this.employeeId, this.password).subscribe((e: Employee) => {
      console.log(e);
      if (!isNullOrUndefined(e) && e.message === 'SUCCESS') {
        localStorage.setItem('employeeRole', e.employeeRole);
        localStorage.setItem('employeeId', e.employeeId);
        this.router.navigate(['dashboard']);
        this.messageBool = true;
        this.messageType = 'SUCCESS';
        this.message = 'Login';
      } else if (!isNullOrUndefined(e) && e.message === 'FAILED') {
        this.messageBool = true;
        this.messageType = 'FAILED';
        this.message = 'EmployeeId or Password do not match';
      }
      this.loader = false;
    },
      (err) => {
        this.messageBool = true;
        this.messageType = 'FAILED';
        this.message = 'Probably Server Down!';
        this.loader = false;
      }
    );    
    this.messageBool = false;
  }

  register() {
    this.router.navigate(['register']);
  }

}
