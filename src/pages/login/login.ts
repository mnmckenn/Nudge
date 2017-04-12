import { Component } from '@angular/core';
import { MyApp } from '../../app/app.component';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-home',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController	) {
      
  }

  login() {
      this.navCtrl.push(TabsPage); // Go to home page
  }

  signup() {
  	  this.navCtrl.push(SignupPage);
  }

}