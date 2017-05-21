import { Component, OnInit, ViewChild} from '@angular/core';
import { Nav, NavController, Refresher, NavParams  } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { LoginService } from '../../providers';
import { loginResult} from '../../models';

import { UserPage } from '../user/user';
import { AboutPage } from '../about/about';

import { Facebook } from '@ionic-native/Facebook';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativeStorage } from '@ionic-native/native-storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [Facebook]
})


export class HomePage implements OnInit {
	@ViewChild(Nav) nav: Nav;
	private pages = {};
	
	loginResult: loginResult[]=[];
    loading: boolean;

	login={} /*post Data*/
	FB_APP_ID: number = 123354464869468

  constructor(
  		public navCtrl: NavController,
  		public navParams: NavParams,
  		public alertCtrl: AlertController,
  		public loginService: LoginService,
  		private splashScreen: SplashScreen,
  		private facebook:Facebook,
  		public nativeStorage:NativeStorage
  ) {
  	 this.facebook.browserInit(this.FB_APP_ID, "v2.8");
  }
  
    ngOnInit() {
    	this.loading = true;
    	
    }
    
    doRefresh(refresher: Refresher) {
        const subscription = this.loginService.getLoginResult(JSON.stringify(this.login)).subscribe(loginResult => {
          this.loginResult = loginResult;
          refresher.complete();
          subscription.unsubscribe();
        }, () => refresher.complete());
    }
    
    doResultLoginChk(){
    	
    	
    	this.loginService.getLoginResult(JSON.stringify(this.login)).subscribe(
    		loginResult => {
    			this.loginResult = loginResult;
    			
    			if(JSON.stringify(this.loginResult)=="true"){
    				
    				this.pages = { 'UserPage': UserPage};
    				
    				this.navCtrl.push(UserPage);
    				
    				const component = this.pages['UserPage'];
    				if (!component) {
    					return;
    				}
    				
    				this.nav.setRoot(component);
    			}else{
    				alert("등록된 정보가 없습니다. 아이디, 비밀번호를 확인해주세요.");
    			}
    			
    		}
    	);
    	
    }
  
   doFbLogin(){
   
    let permissions = new Array();
    permissions = ['public_profile', 'user_friends', 'email'];

    this.facebook.login(permissions)
    .then(function(response){
    	
    }, function(error){
      console.log(error);
    });
    
	 this.pages = { 'AboutPage': AboutPage};
	 	
	 this.navCtrl.push(AboutPage);
	 	
	 const component = this.pages['AboutPage'];
	 if (!component) {
	 		return;
	 }
	 	
	 this.nav.setRoot(component);

  }
   
  loginForm(){
	alert(JSON.stringify(this.login))
  }

}
