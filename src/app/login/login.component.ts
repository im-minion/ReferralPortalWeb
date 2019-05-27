import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/authentication/auth.service';
import { isNullOrUndefined } from 'util';

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
    this.authService.login(this.email, this.password).subscribe((res) => {
      console.log(res);
      if (!isNullOrUndefined(res) && res.message === 'SUCCESS') {
        this.router.navigateByUrl('dashboard');
        localStorage.setItem('role', res.employeeRole);
        localStorage.setItem('id', res.employeeId);
        localStorage.setItem('name', 'VAIBHAV MINIYAR');
        localStorage.setItem('emali', this.email);
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
