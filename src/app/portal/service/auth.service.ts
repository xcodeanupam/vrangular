import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserserviceService } from './userservice.service';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})

export class AuthServices {
  loggedIn = false;
  isAdmin = false;
  currentUser = { _id: '', username: '', loginType: '', userrole: '', email: '', image: '' };

  constructor(
    public jwtHelper: JwtHelperService,
    private userService: UserserviceService,
    private router: Router) {

    // console.log(this.jwtHelper.decodeToken(token));
    // token

    const token = localStorage.getItem('token');
    const s = this.jwtHelper.isTokenExpired(token);

    if (s) {
      // console.log('decoded token is', this.jwtHelper.decodeToken(token)); // token
      const decodedUser = this.decodeUserFromToken(token);
      this.setCurrentUser(decodedUser);
    }
  }

  login(emailAndPassword) {
    console.log(emailAndPassword);
    return this.userService.login(emailAndPassword).map(
      res => {
        console.log('token is s', res);
        console.log('ccccccccccc', JSON.stringify(res.token));
        console.log('token is sss', res.token);
        if (res.token) {
          localStorage.setItem('token', res.token);

          const decodedUser = this.decodeUserFromToken(res.token);
          if (decodedUser) {
            this.setCurrentUser(decodedUser);
          }
          return this.loggedIn;
        }
      }
    );
  }

  // socialLogin(data) {
  //   console.log(data);
  //   return this.userService.socialLogin(data).map(
  //     res => {
  //       console.log('token is s', res);
  //       console.log('ccccccccccc', JSON.stringify(res.token));
  //       console.log('token is sss', res.token);
  //       if (res.token) {
  //         localStorage.setItem('token', res.token);
  //         const decodedUser = this.decodeUserFromToken(res.token);
  //         if (decodedUser) {
  //           this.setCurrentUser(decodedUser);
  //         }
  //         return this.loggedIn;
  //       }
  //     }
  //   );
  // }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('cart');
    this.loggedIn = false;
    this.isAdmin = false;
    this.currentUser = { _id: '', username: '', loginType: '', userrole: '', email: '', image: '' };
    this.router.navigate(['/']);
  }


  decodeUserFromToken(token) {
    return this.jwtHelper.decodeToken(token);
  }

  setCurrentUser(decodedUser) {
    if (decodedUser) {
      this.loggedIn = true;
      this.currentUser._id = decodedUser.user._id;
      this.currentUser.username = decodedUser.user.username;
      this.currentUser.loginType = decodedUser.user.loginType;
      this.currentUser.email = decodedUser.user.email;
      this.currentUser.image = decodedUser.user.image;
      this.currentUser.userrole = decodedUser.user.userrole;
    }
  }

}





