import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';

import { CommonTS } from '../app/commonTS';

import { Schedule } from '../models';

@Injectable()
export class ScheduleService {
    constructor(public http: Http) { }

    private baseUrl = CommonTS.BASE_URL;

    getSchedules(): Observable<Schedule[]> {
        return this.http
            .get(this.baseUrl + '/schedule/list.do')
            .map((res: Response) => res.json());
    }
}
