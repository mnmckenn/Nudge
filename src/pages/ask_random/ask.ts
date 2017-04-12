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

   var sheet = document.createElement('style'); // Background Color
	 sheet.innerHTML = ".fixed-content {background-color: rgb(188, 102, 255);}";
	 document.body.appendChild(sheet);

   // Google Maps

     var seattle = {lat: 47.606, lng: -122.3321}; // Location
     console.log(seattle);
     var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14, // Higher zoom means more zoom
      center: seattle
     });
     var marker = new google.maps.Marker({
      position: seattle,
      map: map // id of div for map
     });
  }

}
