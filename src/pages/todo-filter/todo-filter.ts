import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TodoFilterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-todo-filter',
  templateUrl: 'todo-filter.html',
})
export class TodoFilterPage {
  public todos = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.todos = this.navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TodoFilterPage');
  }

}
