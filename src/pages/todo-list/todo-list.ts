import { TodoFilterPage } from './../todo-filter/todo-filter';
import { TodoFormPage } from './../todo-form/todo-form';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

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

  constructor(public navCtrl: NavController, public navParams: NavParams,
     public events: Events, private loadingCtrl: LoadingController, public stotrage:Storage) {

      stotrage.get('todos').then((data)=> {
        if(data) {
          data = JSON.parse(data);
          this.todos = data;
        }
      });
    // Mise à jour d'une tâche
    // Inscription à l'événement 'task.create' 
    events.subscribe('task.update', (data)=>{
      data = JSON.parse(data);
      this.todos[data.index] = data.task;
      this.persistTask();
    });
    // Création d'une nouvelle tâche
    // Inscription à l'événement 'task.create' 
    events.subscribe('task.create', (data)=>{
      data = JSON.parse(data);
      this.todos.push(data.task);
      this.persistTask();
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
    this.persistTask();
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

  persistTask() {
    this.stotrage.set('todos', JSON.stringify(this.todos));
  }
}
