import { Injectable } from '@angular/core';
import { Http, Response  } from '@angular/http';
import {Observable} from 'rxjs/Observable'; 
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';


import {userVo} from '../models'; 

/*
  Generated class for the UserService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/


@Injectable()
export class UserService {
  	  constructor( public http:Http) {}
  
	  getUserVo(): Observable<userVo[]>{
			 return this.http
			 .get('http://10.0.2.2:8080/iylm/user/selectUserList.json')
			 .delay(2000)
			 .map( (res: Response) => res.json() );
	  }
	  
	 
}
