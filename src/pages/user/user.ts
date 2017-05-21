import { Component, OnInit, ViewChild} from '@angular/core'; 
import { Nav,NavController, Refresher, NavParams } from 'ionic-angular'; 
​
import {UserService} from '../../providers'; 
import {userVo} from '../../models';

import { Facebook } from '@ionic-native/Facebook';

import { HomePage } from '../home/home';


@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
  providers: [Facebook]
})

export class UserPage implements OnInit {
	@ViewChild(Nav) nav: Nav;
	private pages = {};
	
    user: userVo[] = []; 
    loading: boolean;

  	userReady: boolean = false;
    
    constructor(
        public userService: UserService, 
        public navCtrl: NavController,
        public navParams: NavParams,
        private facebook:Facebook
    ) {}
    
    ngOnInit() {
        this.loading = true;
        const subscription = this.userService.getUserVo().subscribe(user => {
          this.user = user;
          this.loading = false;
          subscription.unsubscribe();
        }, () => this.loading = false);
    }
​
    doRefresh(refresher: Refresher) {
        const subscription = this.userService.getUserVo().subscribe(user => {
          this.user = user;
          refresher.complete()
          subscription.unsubscribe();
        }, () => refresher.complete());
    }

doFbLogout(){
   this.facebook.logout()
   .then((response) => {
	   alert(JSON.stringify(response));
   }, (error) => {
	     alert(error);
    })
	    
	this.pages = {
			'HomePage': HomePage
	};
	
	this.navCtrl.push(HomePage);
	
	const component = this.pages['HomePage'];
	if (!component) {
		return;
	}
	
	this.nav.setRoot(component);
	    
	}
    
}

