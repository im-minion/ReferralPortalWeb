import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  constructor( private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  login() {

    console.log(this.username, this.password);
    // TODO: API CALL TO LOGIN
    // success ->
      localStorage.setItem('role','EMPLOYEEE');
      localStorage.setItem('id','40833');
      localStorage.setItem('name','VAIBHAV MINIYAR')
      localStorage.setItem('emali','vaibhavminiyar@gmail.com')
  }

  register() {
    this.router.navigate(['register']);
  }

}
