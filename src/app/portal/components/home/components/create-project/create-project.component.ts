import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { v4 as uuid } from 'uuid';
import { AuthServices } from '../../../../service/auth.service';
import { UserserviceService } from '../../../../service/userservice.service';
@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {
  submitted = false;
  createprojectForm: FormGroup;
  user_id: any = this.auth.currentUser.user_id;
  upUserForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public route: ActivatedRoute,
    public snackBar: MatSnackBar,
    public auth: AuthServices,
    public userService: UserserviceService
  ) { }
  ngOnInit() {
    this.createprojectForm = this.formBuilder.group({
      projectname: ['', Validators.required],
      publish: [],
      user_id: this.user_id,
      data_id: uuid(),
      project_id: uuid()
    });
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
  createname() {
    console.log('form create a webapp', this.createprojectForm.value);
    this.userService.addProject(this.createprojectForm.value).subscribe(
      res => {
        this.openSnackBar('Added successfully', 'Success');
        if (this.auth.currentUser.new === 'true') {
          this.updateUser();
        }
        this.router.navigate(['/home/' + this.createprojectForm.value]);
      },
      //  error => error
      error => this.openSnackBar('Invalid credentials', 'Error')
    );
  }
  updateUser() {
    this.user_id;
    this.upUserForm = this.formBuilder.group({
      user_id: this.user_id,
      new: 'false'
    });
    this.userService.updateUserPoject(this.upUserForm.value).subscribe(
      res => {
        return;
      },
      //  error => error
      error => console.log(error)
    );
  }
}

