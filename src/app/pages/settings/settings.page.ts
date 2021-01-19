import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  value: boolean;

  constructor(private dataService: DataService) {
    this.ionViewDidEnter();
  }

  async ionViewDidEnter() {
    let result = await this.dataService.loadSettings();
    if (result == null) {
      this.value = true;
      await this.dataService.saveSettings({ 'ayarlar': true });
    } else {
      this.value = result['ayarlar'];
    }
  }

  async change() {
    if (this.value == false) {
      await this.dataService.saveSettings({ 'ayarlar': false });
    } else {
      await this.dataService.saveSettings({ 'ayarlar': true });
    }
  }

  ngOnInit() {
  }

}
