import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator } from '@angular/material';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthServices } from '../../../../service/auth.service';
import { UserserviceService } from '../../../../service/userservice.service';
import { Router } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { DataSource } from '@angular/cdk/table';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface PeriodicElement {
  projectname: string;
  date: number;
  publish: number;
  // project_id:string;
  preview:string;

}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  notstartlist: any;
  isLoading: boolean;
  projectnameData: any;
  createprojectForm: FormGroup;
  user_id: any = this.auth.currentUser.user_id;
  projectname: any;
  displayedColumns: string[] = [ 'projectname', 'date', 'publish' ,'preview'];

  
  dataSource = new MatTableDataSource<PeriodicElement>(this.projectnameData);
  selection = new SelectionModel<PeriodicElement>(true, []);

  constructor(
    private formBuilder: FormBuilder,
    public auth: AuthServices,
    public userService: UserserviceService,
    private router: Router,
    public dialog: MatDialog ) { }

  ngOnInit() {
    this.getname();
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row}`;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(HomeDialog, {
      width: '700px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  getname() {
    this.createprojectForm = this.formBuilder.group({
      id: this.user_id,
    });
    this.userService.getUsers(this.createprojectForm.value).subscribe(
      data => {
        this.projectnameData = data;
        this.dataSource = this.projectnameData;
        console.log('all my projects', this.projectnameData);
      },
      error => console.log(error)
    );
  }

  currentProject(project) {
    this.router.navigate(['/project/' + project]);
  }

}




@Component({
  // tslint:disable-next-line:component-selector
  selector: 'home-dialog',
  templateUrl: 'home-dialog.html',
})
// tslint:disable-next-line:component-class-suffix
export class HomeDialog {

  constructor(
    public dialogRef: MatDialogRef<HomeDialog>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}