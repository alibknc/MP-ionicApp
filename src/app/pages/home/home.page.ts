import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DataService } from "src/app/services/data.service";
import { DatePipe } from '@angular/common';
import { interval, Subject } from 'rxjs';
import { NotificationService } from 'src/app/services/notification.service';

export interface entry {
  created: Date,
  id: string
}

export interface TimeSpan {
  hours: number,
  minutes: number,
  seconds: number
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public interval;
  private destroyed$ = new Subject();
  newID: string;
  entries: entry[] = [];
  vakit: number = 0;
  sonuc: boolean = false;

  public vakitler = [{ isim: "İmsak", vakit: "" }, { isim: "Güneş", vakit: "" }, { isim: "Öğle", vakit: "" }, { isim: "İkindi", vakit: "" }, { isim: "Akşam", vakit: "" }, { isim: "Yatsı", vakit: "" }];
  public vakitJson: {}[];
  public tarih: string;
  public date = new Date();
  public gun = Date.now();

  constructor(private dataService: DataService, public datepipe: DatePipe, public changeDetector: ChangeDetectorRef, private notifyService: NotificationService) {
    this.ionViewDidEnter();
  }

  tarihBul() {
    let date: string = this.datepipe.transform(Date.now(), 'dd/MM/yyyy');
    for (let i = 0; i < 2; i++) {
      date = date.replace("/", ".");
    };
    this.tarih = date;
  }

  setVeri(vakit: number) {
    for (let i = 0; i < this.vakitJson.length; i++) {
      let temp = this.vakitJson[i];
      if (temp["MiladiTarihKisa"] == this.tarih) {
        this.vakitler[0].vakit = temp["Imsak"]
        this.vakitler[1].vakit = temp['Gunes']
        this.vakitler[2].vakit = temp['Ogle']
        this.vakitler[3].vakit = temp['Ikindi']
        this.vakitler[4].vakit = temp['Aksam']
        this.vakitler[5].vakit = temp['Yatsi']
        break;
      }
    }
    this.date.setHours(Number(this.vakitler[vakit].vakit.substring(0, 2)));
    this.date.setMinutes(Number(this.vakitler[vakit].vakit.substring(3, 5)));
  }

  getElapsedTime(entry: entry): TimeSpan {
    let result = this.checkTime();
    if (result) {
      this.sonuc = true;
      let totalSeconds = Math.floor((this.date.getTime() - new Date().getTime()) / 1000);
      let hours = 0;
      let minutes = 0;
      let seconds = 0;
      if (totalSeconds >= 3600) {
        hours = Math.floor(totalSeconds / 3600);
        totalSeconds -= 3600 * hours;
      }
      if (totalSeconds >= 60) {
        minutes = Math.floor(totalSeconds / 60);
        totalSeconds -= 60 * minutes;
      }

      seconds = totalSeconds;

      if(hours == 0 && minutes == 0 && seconds == 0) {
        this.sendNotify();
      }

      return {
        hours: hours,
        minutes: minutes,
        seconds: seconds
      };
    }
  }

  addEntry() {
    this.entries.push({
      created: new Date(),
      id: this.newID
    });
    this.newID = '';
  }

  ngOnDestroyed() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  async sendNotify(){
    let result = await this.dataService.loadSettings();
    if(result['ayarlar']){
      await this.notifyService.schedule(this.vakitler[this.vakit].isim);
    }
  }

  async ngOnInit() {
    await this.notifyService.permission();
    this.newID = 'first'
    this.addEntry();
    interval(1000).subscribe(() => {
      if (!this.changeDetector['destroyed']) {
        this.changeDetector.detectChanges();
      }
    })
    this.changeDetector.detectChanges();
  }

  async ionViewDidEnter(){
    let result = await this.dataService.loadData();
    this.vakitJson = result;
    if(this.vakitJson != null){
      this.tarihBul();
      this.setVeri(this.vakit);
      this.getElapsedTime(this.entries[0]);
    }
  }

  checkTime(): boolean {
    if (Math.floor(((this.date.getTime() - new Date().getTime()) / 1000)) < 0) {
      if (this.vakit == 5) {
        this.vakit = 0;
        this.date.setDate(Number(this.tarih.substring(0, 2)) + 1);
        this.setVeri(this.vakit);
      }
      else {
        this.vakit++;
        this.setVeri(this.vakit);
      }
      return this.checkTime();
    } else {
      return true;
    }
  }
}
