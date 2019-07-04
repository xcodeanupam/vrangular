import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { v4 as uuid } from 'uuid';
import { tap, finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';


@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})


export class BackgroundComponent implements OnInit {
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
  constructor(
    private formBuilder: FormBuilder,
    public snackBar: MatSnackBar,
    private storage: AngularFireStorage,
    private db: AngularFirestore,
  ) { }
  toggleHover(event: boolean) {
    this.isHovering = event;
  }
  ngOnInit() {
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





  isActive(snapshot) {
    // tslint:disable-next-line:semicolon
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes
  }
}

