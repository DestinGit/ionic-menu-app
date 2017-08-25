import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { TodoFormPage } from './../pages/todo-form/todo-form';
import { TodoListPage } from './../pages/todo-list/todo-list';
import { TodoFilterPage } from './../pages/todo-filter/todo-filter';
import { ConfigPage } from './../pages/config/config';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {IonicStorageModule} from '@ionic/storage';
import { ConfigProvider } from '../providers/config/config';

import { Camera, CameraOptions } from '@ionic-native/camera';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    TodoListPage,
    TodoFormPage,
    TodoFilterPage,
    ConfigPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    TodoListPage,
    TodoFormPage,
    TodoFilterPage,
    ConfigPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConfigProvider,
    Camera    
  ]
})
export class AppModule {}
