import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContratoPage } from './contrato.page';

const routes: Routes = [
  {
    path: '',
    component: ContratoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContratoPageRoutingModule {}
