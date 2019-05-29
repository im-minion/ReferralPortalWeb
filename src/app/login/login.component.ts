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

  email: string;
  password: string;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  login() {

    console.log(this.email, this.password);
    // TODO: API CALL TO LOGIN
    // success ->
    this.authService.login(this.email, this.password).subscribe((e: Employee) => {
      console.log(e);
      if (!isNullOrUndefined(e) && e.message === 'SUCCESS') {
        localStorage.setItem('employeeRole', e.employeeRole);
        localStorage.setItem('employeeId', e.employeeId);
        this.router.navigate(['dashboard']);
      }

    },
      (err) => {
        console.log(err);
      }
    )


  }

  register() {
    this.router.navigate(['register']);
  }

}
