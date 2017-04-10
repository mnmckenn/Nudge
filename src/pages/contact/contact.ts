import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }

  ionViewWillEnter() {

  	 var sheet = document.createElement('style')
	 sheet.innerHTML = ".fixed-content {background-color: rgb(241, 185, 51);";
	 document.body.appendChild(sheet);
	 
  }

  logout() {
      document.location.href = 'index.html';
  }

}
