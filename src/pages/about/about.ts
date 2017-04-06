import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AskPage } from '../ask/ask';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

  ionViewWillEnter() {

  	 var sheet = document.createElement('style')
	 sheet.innerHTML = ".fixed-content {background-color: rgb(178, 102, 255);}";
	 document.body.appendChild(sheet);

  }

  step() {
  	 this.navCtrl.push(AskPage);
  }


}
