import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecondPage } from '../second/second.page';

import { FirstPage } from './first.page';

const routes: Routes = [
  {
    path: '',
    component: FirstPage
  },
  {
    path: 'second',
    component: SecondPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirstPageRoutingModule { }
