import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';

import {Schedule} from '../models';

@Injectable()
export class ScheduleService {
    constructor(public http: Http) {}
    
    getSchedules(): Observable<Schedule[]> {
        return this.http
          .get('http://localhost/schedule/list.do')
          .delay(2000)
          .map((res: Response) => res.json());
    }
}
