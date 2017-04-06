import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  ionViewWillEnter() {

	var sheet = document.createElement('style')
	sheet.innerHTML = ".fixed-content {background-color: rgb(154,205,50);}";
	document.body.appendChild(sheet);

  }

}
