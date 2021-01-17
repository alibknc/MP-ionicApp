import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from "@ionic/storage";
import { NavController } from '@ionic/angular';
import { DataService } from './services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  public appPages = [
    {
      title: 'Ana Sayfa',
      url: 'home',
      icon: 'calendar'
    },
    {
      title: 'Konum Ayarları',
      url: '/first',
      icon: 'location'
    },
    {
      title: 'Ayarlar',
      url: 'settings',
      icon: 'settings'
    },
    {
      title: 'Hakkında',
      url: 'about',
      icon: 'information-circle'
    },
    {
      title: 'İletişim',
      url: 'contact',
      icon: 'mail'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
    private router: Router,
    private navCtrl: NavController,
    private dataService: DataService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  async ngOnInit() {
    let result = await this.dataService.loadData();
    if(result == null) this.router.navigateByUrl('/first');
    else this.router.navigateByUrl('/home');
  }
}
