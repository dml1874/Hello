import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { CreatePage } from '../pages/create/create';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { FavoritePage } from '../pages/favorite/favorite';
import { SettingPage } from '../pages/setting/setting';
import { SettingDetailsPage1,SettingDetailsPage2 } from '../pages/setting-details/setting-detail';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    CreatePage,
    LoginPage,
    SignupPage,
    FavoritePage,
    SettingPage,
    SettingDetailsPage1,
    SettingDetailsPage2,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      backButtonText: ' ',
      backButtonIcon: 'arrow-round-back'
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    CreatePage,
    LoginPage,
    SignupPage,
    FavoritePage,
    SettingPage,
    SettingDetailsPage1,
    SettingDetailsPage2
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
