import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Storage } from "@ionic/storage";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient, private storage: Storage) { }

  getLocalData(){
    return this.http.get("/assets/data/ulkeler.json");
  }

  getRemoteData(link: string){
    return this.http.get(link);
  }

  async saveData(vakitler){
    await this.storage.set('vakitler', vakitler);
  }

  async saveSettings(ayarlar){
    await this.storage.set('ayarlar', ayarlar);
  }

  async loadData(){
    return this.storage.get('vakitler').then(val => {
      if (val != null && val != undefined) {
        return val;
      }else return null
    });
  }

  async loadSettings(){
    return this.storage.get('ayarlar').then(val => {
      if (val != null && val != undefined) {
        return val;
      }else return null
    });
  }
}
