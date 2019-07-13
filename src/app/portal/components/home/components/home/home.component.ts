import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator } from '@angular/material';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthServices } from '../../../../service/auth.service';
import { UserserviceService } from '../../../../service/userservice.service';
import { Router } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  notstartlist: any;
  isLoading: boolean;
  displayedColumns: string[] = ['select', 'projectname', 'date', 'Publish'];
  dataSource = new MatTableDataSource<any>();
  projectnameData: any;
  createprojectForm: FormGroup;
  user_id: any = this.auth.currentUser.user_id;
  projectname: any;
  selection = new SelectionModel<any>(true, []);

  constructor(
    private formBuilder: FormBuilder,
    public auth: AuthServices,
    public userService: UserserviceService,
    private router: Router, ) { }

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

  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

}


