import { Component } from '@angular/core';
import { MyApp } from '../../app/app.component';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-home',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController	) {
      
  }

  login() {
      this.navCtrl.push(TabsPage);
  }

}