import { Component } from '@angular/core';

import { Platform } from 'ionic-angular';


@Component({
	templateUrl: 'create.html'
})

export class CreatePage { 
	 isAndroid: boolean = false;

	  constructor(platform: Platform) {
	    this.isAndroid = platform.is('android');
	  }
}


@Component({
  template: `
    <ion-tabs class="tabs-basic">
      <ion-tab tabTitle="Music" [root]="rootPage"></ion-tab>
      <ion-tab tabTitle="Movies" [root]="rootPage"></ion-tab>
      <ion-tab tabTitle="Games" [root]="rootPage"></ion-tab>
    </ion-tabs>
`})
export class TabsPage {
  rootPage = CreatePage;
}




