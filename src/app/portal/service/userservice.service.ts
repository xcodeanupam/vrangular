import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable, pipe } from 'rxjs';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})

export class UserserviceService { 
  // tslint:disable-next-line:object-literal-key-quotes
  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });
  private headerss = new Headers({});
  private options2 = new RequestOptions({ headers: this.headerss });
  craetename: any;
  constructor(private http: Http) { }

  register(user): Observable<any> {
    return this.http.post('/api/user', JSON.stringify(user), this.options);
  }

  uplooadProfilepic(user): Observable<any> {
    return this.http.post('/api/userup', JSON.stringify(user), this.options2);
  }

  login(credentials): Observable<any> {
    return this.http.post('/api/login', JSON.stringify(credentials), this.options).map(res => res.json());
  }

  addProject(credentials): Observable<any> {
    return this.http.post('/api/addproject', JSON.stringify(credentials), this.options).map(res => res.json());
  }

  updateUserPoject(credentials): Observable<any> {
    return this.http.post('/api/updateUserProject', JSON.stringify(credentials), this.options).map(res => res.json());
  }
  
  getUsers(data): Observable<any> {
    return this.http.post('/api/getProjects', JSON.stringify(data), this.options).map(res => res.json());
  }
 
  
    }

