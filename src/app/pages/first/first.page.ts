import { Component, OnInit } from '@angular/core';
import { DataService } from "src/app/services/data.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.page.html',
  styleUrls: ['./first.page.scss'],
})
export class FirstPage implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }
  public ulkeler;

  ngOnInit() {
    this.dataService.getLocalData().subscribe(data => {
      this.ulkeler = data;
    })
  }

}
