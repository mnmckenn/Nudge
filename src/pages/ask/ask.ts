import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {googlemaps} from 'googlemaps';


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

     var seattle = {lat: 47.606, lng: -122.3321};
     console.log(seattle);
     var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: seattle
     });
     var marker = new google.maps.Marker({
      position: seattle,
      map: map
     });
  }

}
