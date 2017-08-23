import { TodoFilterPage } from './../todo-filter/todo-filter';
import { TodoFormPage } from './../todo-form/todo-form';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, LoadingController } from 'ionic-angular';

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

  // public todoFiltered = [];

  public filter = 'all';
  private loader;

  constructor(public navCtrl: NavController, public navParams: NavParams, private events: Events, private loadingCtrl: LoadingController) {
    // Mise à jour d'une tâche
    // Inscription à l'événement 'task.create' 
    events.subscribe('task.update', (data)=>{
      data = JSON.parse(data);
      this.todos[data.index] = data.task;
    });
    // Création d'une nouvelle tâche
    // Inscription à l'événement 'task.create' 
    events.subscribe('task.create', (data)=>{
      data = JSON.parse(data);
      this.todos.push(data.task);
    });
          
  }

  find(status) {   
    let newtab = this.todos.filter((item)=>item.done==status);
    this.navCtrl.push(TodoFilterPage, {data:newtab});
  }

  filterTodo() {
  let filtered = [];
  // this.presentLoading();

    switch(this.filter) {
      case 'all':filtered = this.todos;break;
      case 'done': filtered = this.todos.filter((item)=>item.done);break;
      case 'not done': filtered = this.todos.filter((item)=>!item.done);break;
    }

    // this.closeLoading();

    return filtered;
  }

  deleteTask(index) {
    this.todos.splice(index, 1);
  }

  goToForm(data, pos) {
    if(!data) {
      data = {
        title: null,
        done: false
      };
    }

    let params = {
      index: pos,
      task: data
    };

    this.navCtrl.push(TodoFormPage, params);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TodoListPage');
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Please wait...",
      // duration: 3000
    });
    this.loader.present();    
  }

  closeLoading() {
    this.loader.dismiss();
  }
}
