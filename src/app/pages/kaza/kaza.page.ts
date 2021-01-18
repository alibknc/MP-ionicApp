import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-kaza',
  templateUrl: './kaza.page.html',
  styleUrls: ['./kaza.page.scss'],
})
export class KazaPage implements OnInit {
  vakitler = [{
    'vakit': "Sabah",
    'qty': 1
  }, {
    'vakit': "Öğle",
    'qty': 1
  }, {
    'vakit': "İkindi",
    'qty': 1
  }, {
    'vakit': "Akşam",
    'qty': 1
  }, {
    'vakit': "Yatsı",
    'qty': 1
  }]

  constructor(private dataService: DataService, private navCtrl: NavController) {
    this.ionViewDidEnter();
  }

  async ionViewDidEnter(){
    let result = await this.dataService.loadKazalar();
    if(result == null){
      await this.dataService.saveKazalar(this.vakitler);
      result = await this.dataService.loadKazalar();
    }
    this.vakitler =  result;
  }

  artir(index: number) {
    this.vakitler[index].qty += 1;
  }

  azalt(index: number) {
    this.vakitler[index].qty -= 1;
  }

  async kaydet(){
    await this.dataService.saveKazalar(this.vakitler);
    this.navCtrl.navigateRoot("/home")
  }

  ngOnInit() {
  }

}