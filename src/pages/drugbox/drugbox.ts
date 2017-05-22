import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  templateUrl: 'drugbox.html',
})
export class DrugboxModal {
  constructor(private viewCtrl: ViewController) {}

  closeModal(): void {
    this.viewCtrl.dismiss();
  }
}