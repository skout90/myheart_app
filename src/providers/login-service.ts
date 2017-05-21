import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable'; 
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';

import {loginResult} from '../models';
/*
  Generated class for the LoginService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

@Injectable()
export class LoginService {

  constructor(public http: Http) {
    console.log('Hello LoginService Provider');
  }
  
  getLoginResult(property):Observable<loginResult[]>{
  		
  		let body = property;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('http://10.0.2.2:8080/iylm/user/loginService', body, options)
            	.map( (res: Response)=> res.json());
  
  }
  
  insertFacebookUser(property):Observable<Response>{
	  alert("insertFacebookUser"+property);
	  let body = property;
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      return this.http.post('http://10.0.2.2:8080/iylm/user/insertUser', body, options);
}
  

}
