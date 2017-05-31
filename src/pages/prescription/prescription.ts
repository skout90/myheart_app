import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { NgForm } from '@angular/forms';

import { PrescriptionService } from '../../providers';

import { Prescription } from '../../models';

@Component({
  templateUrl: 'prescription.html',
})
export class PrescriptionModal {
  prescription: Prescription = {
    psNo: null,
    userNo: 17,  // 테스트 skout90
    drugCd: 'ABC', // 테스트 
    mainDiseaseCd: '',
    subDiseaseCd: '',
    timeDivision: ''
  };

  timeDivisions = [
    { id: 'morning', label: '아침', value: 'MORNING', check: false },
    { id: 'noon', label: '점심', value: 'NOON', check: false },
    { id: 'evening', label: '저녁', value: 'EVENING', check: false },
    { id: 'night', label: '밤', value: 'NIGHT', check: false } ];

  constructor(
    private viewCtrl: ViewController,
    private prescriptionService: PrescriptionService
  ) { }

  onSubmit(prescriptionForm: NgForm) {
    console.log(prescriptionForm.value);  // { first: '', last: '' }
    console.log(this.prescription);  // false

    // 시간 구분을 체크
    this.timeDivisions.forEach(element => {
      if(element.check != false) {
        this.prescription.timeDivision += element.value + ',';
      }
    });

    console.log(this.prescription);  // false
    this.prescriptionService.insertPrescription(this.prescription).subscribe();
  }

  closeModal(): void {
    this.viewCtrl.dismiss();
  }
}