import { Component, OnInit } from '@angular/core';
import { NavController, Refresher, NavParams } from 'ionic-angular';

import {ScheduleService} from '../../providers';
import {Schedule} from '../../models';

@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html'
})
export class SchedulePage implements OnInit {
    schedules: Schedule[] = [];
    loading: boolean;
    constructor(
        private scheduleService: ScheduleService,
        public navCtrl: NavController,
        public navParams: NavParams
    ) {}

    ionViewDidLoad() {
        console.log('ionViewDidLoad SchedulePage');
    }
    
    ngOnInit() {
        this.loading = true;
        const subscription = this.scheduleService.getSchedules().subscribe(schedules => {
          console.log(schedules);
          this.schedules = schedules;
          this.loading = false;
          subscription.unsubscribe();
        }, () => this.loading = false);
    }

    doRefresh(refresher: Refresher) {
        const subscription = this.scheduleService.getSchedules().subscribe(schedules => {
          this.schedules = schedules;
          refresher.complete()
          subscription.unsubscribe();
        }, () => refresher.complete());
    }

}
