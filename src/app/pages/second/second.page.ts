import { Component, OnInit } from '@angular/core';
import { DataService } from "src/app/services/data.service";
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.page.html',
  styleUrls: ['./second.page.scss'],
})
export class SecondPage implements OnInit {
  ulke: any;

  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute, private router: Router) {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.sehirleriGetir(id);
  }

  public sehirler;
  public sehirID: string;

  sehirleriGetir(sehir: string) {
    this.dataService.getRemoteData("https://ezanvakti.herokuapp.com/sehirler/" + sehir).subscribe(data => {
      this.sehirler = data;
    })
  }

  ngOnInit() {
  }

}
