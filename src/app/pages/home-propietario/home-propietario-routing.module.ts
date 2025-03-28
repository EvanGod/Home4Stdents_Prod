import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePropietarioPage } from './home-propietario.page';

const routes: Routes = [
  {
    path: '',
    component: HomePropietarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePropietarioPageRoutingModule {}
