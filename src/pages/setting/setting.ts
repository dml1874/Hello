import  { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { SettingDetailsPage1,SettingDetailsPage2 } from '../setting-details/setting-detail';

@Component({
	templateUrl: 'setting.html'
})

export class SettingPage{

	constructor(public navCtrl: NavController) { }

	settingDetails1(){
		this.navCtrl.push(SettingDetailsPage1);
	}
	settingDetails2(){
		this.navCtrl.push(SettingDetailsPage2);
	}

}



