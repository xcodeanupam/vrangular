import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { AuthServices } from '../../service/auth.service';
import { UserserviceService } from '../../service/userservice.service';
@Component({
  selector: 'app-web-app',
  templateUrl: './web-app.component.html',
  styleUrls: ['./web-app.component.scss']
})
export class WebAppComponent implements OnInit {
  projectnameData: any;
  createprojectForm: FormGroup;
  user_id: any = this.auth.currentUser.user_id;
  projectname: string;
  constructor(
    private formBuilder: FormBuilder, private router: Router, public snackBar: MatSnackBar,
    public auth: AuthServices, public userService: UserserviceService, public route: ActivatedRoute,
  ) { }


  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.projectname = params.get('name');
      console.log('params', params.get('name'));
    });
    // this.getname();
  }

  
  currentProjectImage(project) {
    this.router.navigate(['/webapp/background-image/' + project]);
  }

  currentProjectAudio(project) {
    this.router.navigate(['/webapp/audio/' + project]);
  }

  currentProjectModel(project) {
    this.router.navigate(['/webapp/3d-model/' + project]);
  }

  currentProjectButton(project) {
    this.router.navigate(['/webapp/button-style/' + project]);
  }



  // getname() {
  //   this.createprojectForm = this.formBuilder.group({
  //     id: this.user_id,
  //   });
  //   this.userService.getUsers(this.createprojectForm.value).subscribe(data => {
  //     this.projectnameData = data;
  //     console.log('all my projects', this.projectnameData);

  //   }, error => console.log(error));
  // }

}
