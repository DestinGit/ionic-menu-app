import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

/*
  Generated class for the ConfigProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ConfigProvider {

  private filter;
  private allowedFilters = ['all', 'done', 'not done'];

  constructor(private strorage:Storage) {
    // Récupération de la configuration
    strorage.get('config.filter').then((data)=>{
      this.filter = data || 'all';
    });
  }

  getFilter(){
    return new Promise((resolve, reject)=>{
      // Récupération de la configuration
      this.strorage.get('config.filter').then((data)=>{
        this.filter = data || 'all'; 
        resolve(this.filter);     
      });
    });
  }

  getAllowedFilters() {
    return this.allowedFilters;
  }

  setFilter(filter){
    this.filter = filter;
    this.strorage.set('config.filter', filter);
  }

}
