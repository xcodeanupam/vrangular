import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserserviceService } from '../../service/userservice.service';
import { MatSnackBar } from '@angular/material';
import { AuthServices } from '../../service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  email = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(100)
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6)
  ]);
  constructor(private formBuilder: FormBuilder, private router: Router,
    // tslint:disable-next-line:align
    public snackBar: MatSnackBar,
    // tslint:disable-next-line:align
    public auth: AuthServices,
    // public toast: ToastComponent,
    // tslint:disable-next-line:align
    private userService: UserserviceService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: this.email,
      password: this.password
    });
  }

  onRefresh() {
    // tslint:disable-next-line:only-arrow-functions
    this.router.routeReuseStrategy.shouldReuseRoute = function() { return false; };

    const currentUrl = this.router.url + '?';

    this.router.navigateByUrl(currentUrl)
      .then(() => {
        this.router.navigated = false;
        this.router.navigate([this.router.url]);
      });
  }
  setClassEmail() {
    return { 'has-danger': !this.email.pristine && !this.email.valid };
  }
  setClassPassword() {
    return { 'has-danger': !this.password.pristine && !this.password.valid };
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
  login() {
    console.log('formogin, this.loginForm.value');
    
    // this.toast.setMessage('you successfully registered!', 'success');

    this.auth.login(this.loginForm.value).subscribe(
      res => {
        // this.toast.setMessage('you successfully Loggedin!', 'success');
        console.log('loged in successfully');
        this.router.navigate(['/home']);
      },
    //  error => error
    error => this.openSnackBar('Invalid credentials', 'Error')
    );
  }


}

  



