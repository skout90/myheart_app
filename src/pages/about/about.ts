import { Component, OnInit, ViewChild} from '@angular/core';
import { Nav, NavController, Refresher, NavParams  } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { UserPage } from '../user/user';
import { LoginService } from '../../providers';

import { Facebook } from '@ionic-native/Facebook';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  providers: [Facebook]
})

export class AboutPage implements OnInit{
	@ViewChild(Nav) nav: Nav;
	private pages = {};
	private snsUserInfo = {};
	
	FB_APP_ID: number = 123354464869468
	loading: boolean;

  constructor(public navCtrl: NavController,
  		public navParams: NavParams,
  		public alertCtrl: AlertController,
  		private facebook:Facebook,
  		public loginService: LoginService
  ) {
		 this.facebook.browserInit(this.FB_APP_ID, "v2.8");
  }
  
	
	 ngOnInit() {
	    	this.loading = true;
	    }
  
	  getFbDetails(){
		 
	   this.facebook.getLoginStatus().then((response)=>{
		   if(response.status == 'connected'){
			   this.facebook.api('/'+ response.authResponse.userID+'?fields=id,name,email', []).then((response)=>{
				  
				  this.snsUserInfo = {
						  'snsId':response.id,
				  		  'snsType':'Facebook',
				  		  'username':response.name,
						  'email':response.email
				  };
				  
				  alert(JSON.stringify(this.snsUserInfo));
				  
				  this.loginService.insertFacebookUser(JSON.stringify(this.snsUserInfo)).subscribe();
				  
				  this.pages = {
			    			'UserPage': UserPage
			    	};
			    	
			    	this.navCtrl.push(UserPage);
			    	
			    	const component = this.pages['UserPage'];
			    	if (!component) {
			    		return;
			    	}
			    	
			    	this.nav.setRoot(component);
				  
				  
			   },(error)=>{
				   alert(error);
			   })
		   }
		   else{
			   alert('Not Logged in');
		   }
	   })
	   
	   
  }

}
