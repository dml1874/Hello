import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { Platform,ActionSheetController } from 'ionic-angular';



@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  selectedItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform,public actionSheetCtrl: ActionSheetController) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
  }

   openMenu() {
    let actionSheet = this.actionSheetCtrl.create({
      title: '分享',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: '朋友圈',
          icon: 'icon-wechat-space',
        },{
          text: '微信好友',
          icon: 'icon-wechat',
        },{
          text: 'QQ空间',
          icon: 'icon-QZone',
        },{
          text: 'QQ好友',
          icon: 'icon-qq',
        },{
          text: '微博',
          icon: 'icon-weibo',
        },{
          text: '邮件',
          icon: 'mail',
        },{
          text: '取消',
          icon: 'close',
        }
      ]
    });
    actionSheet.present();
  }

  
}
