import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

import { Camera, CameraOptions } from '@ionic-native/camera';
/**
 * Generated class for the TodoFormPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-todo-form',
  templateUrl: 'todo-form.html',
})
export class TodoFormPage {
  public task;
  public index: Number = -1;

  public titleForm:String = 'Création';

  private cameraOptions: CameraOptions = {
    quality: 75,
    targetWidth: 500,
    targetHeight: 500,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
  };

  // public imageData:String;

  constructor(public navCtrl: NavController, public navParams: NavParams, private events: Events,
  private camera: Camera) {
    // Récupération des données transmises par todo-list.ts
    this.task = this.navParams.get('task');
    this.index = this.navParams.get('index');

    if (this.index >= 0) {
      this.titleForm = 'Modification';
    }
  }

  /**
   * Persistance des données
   */
  saveTask() {
    let params = {
      task: this.task,
      index: this.index
    };

    if (this.index >= 0) {
      // publier un event update si index existe
      this.events.publish('task.update', JSON.stringify(params));
    } else {
      // publier un event créer si index n'existe pas
      this.events.publish('task.create', JSON.stringify(params));
    }

    // Retour à la page précédente
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
  }

  takePicture() {
    this.camera.getPicture(this.cameraOptions).then((pictureData) => {
      // Pour la sérialisation de l'image
      // let base64Image = 'data:image/jpeg;base64,' + pictureData;
      // ou sans la sérialisation
      // this.imageData = pictureData;
      this.task.imageData = pictureData;
    });
  }
}
