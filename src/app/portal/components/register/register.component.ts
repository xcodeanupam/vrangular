import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../../service/userservice.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatSnackBar } from '@angular/material';
import { AuthServices } from '../../service/auth.service';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  submitted = false;
  registerForm: FormGroup;
  username = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(30),
  ]);
  phone = new FormControl('', [
    Validators.required,
    Validators.minLength(10),
    Validators.pattern('[0-9]*')
  ]);
  email = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(100),
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6)
  ]);

  constructor( 
     private formBuilder: FormBuilder,
    private router: Router,
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    public auth: AuthServices,
    private userService: UserserviceService ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: this.username,
      phone: this.phone,
      email: this.email,
      password: this.password,
      user_id: uuid()
    });
  }
  setClassUsername() {
    return { 'has-danger': !this.username.pristine && !this.username.valid };
  }
  setClassPassword() {
    return { 'has-danger': !this.password.pristine && !this.password.valid };
  }
  setClassEmail() {
    return { 'has-danger': !this.email.pristine && !this.email.valid };
  }
  setClassPhone() {
    return { 'has-danger': !this.phone.pristine && !this.phone.valid };
  }
 
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
  register() {
    this.submitted = true;
    // stop here if form is invalid
   console.log('form values', this.registerForm.value);

    if (this.registerForm.invalid) {
      return;
    }
    // this.toast.setMessage('you successfully registered!', 'success');
    this.userService.register(this.registerForm.value).subscribe(
      res => {
        // currentUser
        // this.toast.setMessage('you successfully registered!', 'success');
        console.log('registeer done');
        this.router.navigate(['/']);
        // this.openDialog();
      },
      error => this.openSnackBar('Invalid credentials', 'Error')

    );
  }

}




