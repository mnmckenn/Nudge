import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
// import { NudgeData } from '../../assets/data/nudges.json';
import {HttpProvider} from '../../providers/http-provider';

@Component({
  selector: 'page-home',
  providers: [HttpProvider],
  templateUrl: 'categories.html'
})
export class CategoryPage {

  newsData: any;

  constructor(public navCtrl: NavController, public httpProvider:HttpProvider) {
  	this.getdata();
  }

  getdata(){
  this.httpProvider.getJsonData().subscribe(
    result => {
      this.newsData=result;
      console.log("Success : "+this.newsData);
    },
    err =>{
      console.error("Error : "+err);
    } ,
    () => {
      console.log('getData completed');
    }
   );
  }

  ionViewWillEnter() {
  	
  }
}