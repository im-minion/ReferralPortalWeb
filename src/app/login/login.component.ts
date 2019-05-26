import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  constructor() { }

  ngOnInit() {
  }

  login() {

    console.log(this.username, this.password);
    // TODO: APICALL TO LOGIN
    // success ->
      localStorage.setItem('role','EMPLOYEEE');
      localStorage.setItem('id','40833');
      localStorage.setItem('name','VAIBHAV MINIYAR')
      localStorage.setItem('emali','vaibhavminiyar@gmail.com')
  }

}
