import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KazaPageRoutingModule } from './kaza-routing.module';

import { KazaPage } from './kaza.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KazaPageRoutingModule
  ],
  declarations: [KazaPage]
})
export class KazaPageModule {}
