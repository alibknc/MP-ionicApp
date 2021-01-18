import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KazaPage } from './kaza.page';

const routes: Routes = [
  {
    path: '',
    component: KazaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KazaPageRoutingModule {}
