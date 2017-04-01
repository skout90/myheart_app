import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SchedulePage } from '../pages/schedule/schedule';

import { ScheduleService } from '../providers';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CloudSettings, CloudModule } from '@ionic/cloud-angular';

const cloudSettings: CloudSettings = {
    'core': {
        'app_id': '6788fe53'
    },
	'push': {
	    'sender_id': '421011063140',
	    'pluginConfig': {
	        'ios': {
	            'badge': true,
	            'sound': true
	        },
	        'android': {
	            'iconColor': '#343434'
	        }
	    }
    }
};

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        SchedulePage
    ],
    imports: [
        IonicModule.forRoot(MyApp),
        CloudModule.forRoot(cloudSettings)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        SchedulePage
    ],
    providers: [
        ScheduleService,
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {}
