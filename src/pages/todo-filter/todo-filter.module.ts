import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TodoFilterPage } from './todo-filter';

@NgModule({
  declarations: [
    TodoFilterPage,
  ],
  imports: [
    IonicPageModule.forChild(TodoFilterPage),
  ],
})
export class TodoFilterPageModule {}
