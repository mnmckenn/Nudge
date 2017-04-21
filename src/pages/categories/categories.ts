import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
// import { NudgeData } from '../../assets/data/nudges.json';
import {HttpProvider} from '../../providers/http-provider';

@Component({
  selector: 'page-home',
  providers: [HttpProvider],
  templateUrl: 'categories.html'
})
export class CategoryPage {

  category: any;
  nudgeData: any;

  constructor(public navCtrl: NavController, public httpProvider:HttpProvider,public params:NavParams) {
  	console.log(params.get("category"));
  	this.category = params.get("category");
  	console.log(this.category)
  	this.httpProvider.getJsonData().subscribe(
    result => {
      this.nudgeData=result;
    },
    err =>{
      console.error("Error : "+err);
    } ,
    () => {
      console.log('getData completed');
    }
   );
  }

  ionViewDidEnter() {
  	console.log(this.nudgeData);
  	var nd = JSON.parse(this.nudgeData._body);
  	console.log(nd);
  	var list = "<ion-list>";
  	for (var item in nd) {
  		if (nd[item].category == this.category) {
	  		list += ("<ion-item><h2>" + nd[item].content + "</h2></ion-item>");
	  	}
  	}
  	list += "</ion-list>";
  	document.getElementById("nudgeList").innerHTML=list;
  }
}