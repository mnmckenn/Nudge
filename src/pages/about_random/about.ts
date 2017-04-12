import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AskPage } from '../ask_random/ask';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

  ionViewWillEnter() {

   var sheet = document.createElement('style'); // Set the background color
	 sheet.innerHTML = ".fixed-content {background-color: rgb(178, 102, 255);}";
	 document.body.appendChild(sheet);

  }

  step() {
  	 this.navCtrl.push(AskPage); // On swipe, change the page to ask_random/ask
  }


}
