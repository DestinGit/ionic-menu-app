import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

/**
 * Generated class for the RandomUserListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-random-user-list',
  templateUrl: 'random-user-list.html',
})
export class RandomUserListPage {

  public users = [];
  private url = 'https://randomuser.me/api/';

  constructor(public navCtrl: NavController, public navParams: NavParams, private http:Http) {
    this.loadUsers();
  }

  loadUsers() {
    this.http.get(this.url + '?results=10').subscribe(
      (response) => {
        console.log(response.json());
      },
      (err) => {
        console.log(err);        
      }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RandomUserListPage');
  }

}
