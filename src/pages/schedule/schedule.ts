import { Component, OnInit } from '@angular/core';
import { NavController, Refresher, NavParams, Platform } from 'ionic-angular';
import { Push, PushToken } from '@ionic/cloud-angular';

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
        public navParams: NavParams,
        public push: Push,
        public platform: Platform
    ) {}

    ionViewDidLoad() {
//        console.log('ionViewDidLoad SchedulePage');
    }

    ngOnInit() {
        console.log(this.platform);
        if (this.platform.is('android')) {
            // 푸시 Register
            this.push.register().then((t: PushToken) => {
                return this.push.saveToken(t);
            }).then((t: PushToken) => {
                console.log('Token saved:', t.token);
            });
    
            this.push.rx.notification()
                .subscribe((msg) => {
                    alert(msg.title + ': ' + msg.text);
            });   
        } else {
            console.log('not android');
        }
        
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
