import { Component, OnInit } from '@angular/core';
import { DataService } from "src/app/services/data.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-third',
  templateUrl: './third.page.html',
  styleUrls: ['./third.page.scss'],
})
export class ThirdPage implements OnInit {

  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute, private router: Router) { 
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.ilceleriGetir(id);
  }
  
  public ilceler;
  public vakitler;
  
  ilceleriGetir(ilce: string){
    this.dataService.getRemoteData("https://ezanvakti.herokuapp.com/ilceler/"+ilce).subscribe(data => {
      this.ilceler = data;
    })
  }

  kaydet(vakitler: string){
    this.dataService.getRemoteData("https://ezanvakti.herokuapp.com/vakitler/"+vakitler).subscribe(data => {
      this.vakitler = data;
      this.dataService.saveData(this.vakitler);
    })
  }

  ngOnInit() {
  }

}
