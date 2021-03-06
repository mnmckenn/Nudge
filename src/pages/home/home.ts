import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CategoryPage } from '../categories/categories';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  categories: string = "all"; // Sets the default segment to "All" instead of "Favorites"

  constructor(public navCtrl: NavController) {

  }

  ionViewWillEnter() {

  	//this.categories = "'all'";

	var sheet = document.createElement('style')
	sheet.innerHTML = ".fixed-content {background-color: rgb(0, 0, 0);}";
	document.body.appendChild(sheet);

  }

  favorite() {
  	//[name]="visible ? 'arrow-dropdown' : 'arrow-dropup'"
  }

  enterCategory(val) {
  	this.navCtrl.push(CategoryPage, {category:val}); // Upon clicking on a category, navigate to the page for that category
  }

}
