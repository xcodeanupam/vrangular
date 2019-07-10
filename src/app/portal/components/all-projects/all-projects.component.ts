import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { v4 as uuid } from 'uuid';
import { AuthServices } from '../../service/auth.service';
import { UserserviceService } from '../../service/userservice.service';
@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.scss']
})
export class AllProjectsComponent implements OnInit {
  projectnameData: any;
  createprojectForm: FormGroup;
  user_id: any = this.auth.currentUser.user_id;
    projectname: any;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public snackBar: MatSnackBar,
    public auth: AuthServices,
    public userService: UserserviceService
  ) { }

  ngOnInit() {
    this.getname();
  }
  getname() {
    this.createprojectForm = this.formBuilder.group({
      id: this.user_id,
    });
    this.userService.getUsers(this.createprojectForm.value).subscribe(
      data => {
        this.projectnameData = data;
        console.log('all my projects', this.projectnameData);
      },
      error => console.log(error)
    );
  }


  currentProject(project) {
    this.router.navigate(['/project/' + project]);

  }
}
