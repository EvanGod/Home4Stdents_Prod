import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisCitasPage } from './mis-citas.page';

const routes: Routes = [
  {
    path: '',
    component: MisCitasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisCitasPageRoutingModule {}
