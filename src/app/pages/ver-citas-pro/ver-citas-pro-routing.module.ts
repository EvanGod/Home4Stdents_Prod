import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerCitasProPage } from './ver-citas-pro.page';

const routes: Routes = [
  {
    path: '',
    component: VerCitasProPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerCitasProPageRoutingModule {}
