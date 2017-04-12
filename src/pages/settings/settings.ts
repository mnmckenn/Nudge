import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  constructor(public navCtrl: NavController) {

  }

  ionViewWillEnter() {

  	 var sheet = document.createElement('style')
	 sheet.innerHTML = ".fixed-content {background-color: rgb(241, 185, 51);";
	 document.body.appendChild(sheet);
	 
  }

  logout() {
      document.location.href = 'index.html'; // Reset the app
  }

}
