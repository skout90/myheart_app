import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { UserPage } from '../pages/user/user';
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { SchedulePage } from '../pages/schedule/schedule';

import { Facebook } from '@ionic-native/facebook';
import { NativeStorage } from '@ionic-native/native-storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TabsPage;
  private pages = {};
  @ViewChild(Nav) nav: Nav;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    nativeStorage: NativeStorage
  ) {

    platform.ready().then(() => {
      let env = this;
      /*NativeStorage.getItem('user')
        .then( function (data) {
        
          env.nav.push(UserPage);
          this.splashScreen.hide();
        }, function (error) {
        
          env.nav.push(HomePage);
          this.splashScreen.hide();
        });*/

      //StatusBar.styleDefault();
    });
    this.pages = {
      'HomePage': HomePage,
      'SchedulePage': SchedulePage
    };
  }

  openPage(pageName) {
    const component = this.pages[pageName];
    if (!component) {
      return;
    }

    this.nav.setRoot(component);

  }
}
