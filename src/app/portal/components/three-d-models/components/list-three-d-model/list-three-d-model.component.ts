import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import {  FormGroup,  FormControl,  Validators,  FormBuilder} from '@angular/forms';
import { AuthServices } from '../../../../service/auth.service';
import { UserserviceService } from '../../../../service/userservice.service';

@Component({
  selector: 'app-list-three-d-model',
  templateUrl: './list-three-d-model.component.html',
  styleUrls: ['./list-three-d-model.component.scss']
})
export class ListThreeDModelComponent implements OnInit {
  notstartlist: any;
  isLoading: boolean;
  currentVendor = this.auth.currentUser;
  // displayedColumns: string[] = ['productname', 'date', 'discription'];
  dataSource = new MatTableDataSource<any>();
  reviewForm: FormGroup;

  // @ViewChild(MatSort) sort: MatSort;
  // @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(
   private formBuilder: FormBuilder,
   public auth: AuthServices,
   public userService: UserserviceService
  ) { }

  ngOnInit() {
    //this.dataSource.sort = this.sort;
   //this.dataSource.paginator = this.paginator;
   // this.getReviews();
  }



  getReviews() {
    // this.reviewForm = this.formBuilder.group({
    //   id: this.currentVendor.company,
    // });
    // this.vendorService.getReviewsCompany(this.reviewForm.value).subscribe(
    //   data => {
    //     console.log('current vendor reviews are', data);
    //     this.dataSource.data = data;
    //   },
    //   error => console.log(error)
    // );
  }

}


