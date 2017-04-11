import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CategoryPage } from '../categories/categories';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  categories: string = "all";

  constructor(public navCtrl: NavController) {

  }

  ionViewWillEnter() {

  	//this.categories = "'all'";

	var sheet = document.createElement('style')
	sheet.innerHTML = ".fixed-content {background-color: rgb(154,205,50);}";
	document.body.appendChild(sheet);

  }

  favorite() {
  	//[name]="visible ? 'arrow-dropdown' : 'arrow-dropup'"
  }

  enterCategory() {
  	this.navCtrl.push(CategoryPage);
  }

}
