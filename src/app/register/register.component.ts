import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ResponseTypes } from '../app.constants';
import { AuthService } from '../services/authentication/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {
  public registerForm: FormGroup;
  public isLoadingRegister: boolean = false;
  private subscriptions$: Subscription[] = [];

  constructor(private router: Router, private authService: AuthService) { }

  public ngOnInit(): void {
    this.registerForm = new FormGroup({
      employeeId: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      confirmPassword: new FormControl(null, [Validators.required])
    });
  }

  ngOnDestroy(): void {
    this.subscriptions$.map(sub => sub && sub.unsubscribe());
  }

  public register(): void {
    this.isLoadingRegister = true;
    const payload = this.registerForm.value;
    delete payload.confirmPassword;
    const register$ = this.authService.register(payload).subscribe(
      (data) => {
        this.isLoadingRegister = false;
        if (data.message == ResponseTypes.SUCCESS) {
          this.registerForm.reset();
          alert('Success!');
          this.login();
        } else {
          console.log(data);
          alert('Failed!' + data.message);
        }
      },
      (err) => {
        console.log(err);
        this.isLoadingRegister = false;
      }
    );
    this.subscriptions$.push(register$);
  }

  public login(): void {
    this.router.navigate(['login']);
  }

  public disableRegisterButton(): boolean {
    return !this.registerForm.valid || (this.registerForm.value.password && this.registerForm.value.password != this.registerForm.value.confirmPassword)
  }
}
