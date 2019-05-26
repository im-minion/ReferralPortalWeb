import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  login() {

    console.log(this.email, this.password);
    // TODO: API CALL TO LOGIN
    // success ->
    localStorage.setItem('role', 'EMPLOYEEE');
    localStorage.setItem('id', '40833');
    localStorage.setItem('name', 'VAIBHAV MINIYAR')
    localStorage.setItem('emali', this.email)
    this.router.navigateByUrl('dashboard')
  }

  register() {
    this.router.navigate(['register']);
  }

}
