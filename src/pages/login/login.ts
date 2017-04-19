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

  ionWillEnter() {
  	var sheet = document.createElement('style')
	sheet.innerHTML = ".fixed-content {background-color: rgb(154,205,50);}";
	document.body.appendChild(sheet);
  }

  login() {
      this.navCtrl.push(TabsPage); // Go to home page
  }

  signup() {
  	  this.navCtrl.push(SignupPage);
  }

}