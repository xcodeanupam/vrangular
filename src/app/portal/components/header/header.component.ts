import { Component, OnInit } from '@angular/core';
import { AuthServices } from '../../service/auth.service';
import { UserserviceService } from '../../service/userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentuser: any = this.auth.currentUser;
  isLoggedin= true;
   constructor( 
    private router: Router,
    public auth: AuthServices,
    public userService: UserserviceService
    ) { }

    ngOnInit() {
      if (this.currentuser.email === '') {
        this.isLoggedin = false;
      }
      if (this.currentuser.email === '' && this.currentuser.userrole !== 'user') {
        this.router.navigate(['/']);
        console.log('user not logged in');
      }
    }

    funcLogout() {
      this.auth.logout();
    }


    
  }
