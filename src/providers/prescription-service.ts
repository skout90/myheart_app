import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';

import { CommonTS } from '../app/commonTS';

import { Prescription } from '../models';

@Injectable()
export class PrescriptionService {
    constructor(public http: Http) { }

    private baseUrl = CommonTS.BASE_URL;

    insertPrescription(prescription: Prescription): Observable<Response> {
        return this.http.post(this.baseUrl + '/prescription/insert.do', prescription)
            	.map( (res: Response)=> res.json());
    }
}
