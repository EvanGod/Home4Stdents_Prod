import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MetododepagoPage } from './metododepago.page';

const routes: Routes = [
  {
    path: '',
    component: MetododepagoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MetododepagoPageRoutingModule {}
