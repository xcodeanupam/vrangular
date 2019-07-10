import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { v4 as uuid } from 'uuid';
import { tap, finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthServices } from '../../service/auth.service';
import { UserserviceService } from '../../service/userservice.service';

@Component({
  selector: 'app-three-d-model',
  templateUrl: './three-d-model.component.html',
  styleUrls: ['./three-d-model.component.scss']
})
export class ThreeDModelComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  categories: any;
  task: AngularFireUploadTask;
  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: Observable<string>;
  isHovering: boolean;
  imageUrl: any;
  items: Observable<any[]>;
  createprojectForm: FormGroup;
  user_id: any = this.auth.currentUser.user_id;
  private router: Router;


  constructor(
    private formBuilder: FormBuilder,
    public snackBar: MatSnackBar,
   
    private storage: AngularFireStorage,
    private db: AngularFirestore,
    public route: ActivatedRoute,
    public auth: AuthServices,
    public userService: UserserviceService
  ) { }
  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  ngOnInit() {
    this.createprojectForm = this.formBuilder.group({
      projectname: ['', Validators.required],
      user_id: this.user_id,
      project_id: uuid(),
      projectDiscription: [],
    });
  }

  startUpload(event: FileList) {
    const file = event.item(0);
    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type :( ');
      return;
    }
    const path = `review/${new Date().getTime()}_${file.name}`;

    const customMetadata = { app: 'review' };

    this.task = this.storage.upload(path, file, { customMetadata });

    this.percentage = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges().pipe(
      tap(snap => {
        if (snap.bytesTransferred === snap.totalBytes) {
          this.db.collection('review_pic').add({ path, size: snap.totalBytes });
        }
      }),
      finalize(() => {
        this.downloadURL = this.storage.ref(path).getDownloadURL();
        this.downloadURL.subscribe(data => {
          this.imageUrl = data;
          console.log('data img url', this.imageUrl);
        });
      })
    );
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
        this.router.navigate(['/viewapp']);
      },
      //  error => error
      error => this.openSnackBar('Invalid credentials', 'Error')
    );
  }

  isActive(snapshot) {
    // tslint:disable-next-line:semicolon
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes
  }
}

