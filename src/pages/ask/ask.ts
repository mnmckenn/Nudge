import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-about',
  templateUrl: 'ask.html'
})
export class AskPage {

  constructor(public navCtrl: NavController) {

  }

  ionViewWillEnter() {

  	 var sheet = document.createElement('style')
	 sheet.innerHTML = ".fixed-content {background-color: rgb(188, 102, 255);}";
	 document.body.appendChild(sheet);

  }

}
