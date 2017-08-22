import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TodoListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-todo-list',
  templateUrl: 'todo-list.html',
})
export class TodoListPage {
  public todos = [
    {title: 'sortir le chat', done: false},
    {title: 'Trianguler les pyramides', done: false},
    {title: 'Surélever l\'Atlantide', done: false},
    {title: 'Nettoyer les écuries d\'Augias', done: false},
    {title: 'Payer la dette greque', done: false}
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TodoListPage');
  }

}
