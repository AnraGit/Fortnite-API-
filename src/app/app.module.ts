import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';

import { Noticias } from '../pages/noticias/noticias';
import { Ranking } from '../pages/ranking/ranking';
import { Buscador } from '../pages/buscador/buscador';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ForniteProvider } from '../providers/fornite/fornite';

@NgModule({
  declarations: [
    MyApp,
    Noticias,
    Ranking,
    Buscador,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Noticias,
    Ranking,
    Buscador,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpClientModule,
    ForniteProvider
  ]
})
export class AppModule {}
