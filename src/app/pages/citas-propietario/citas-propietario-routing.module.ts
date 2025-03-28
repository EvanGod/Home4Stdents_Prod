import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitasPropietariosPage } from './citas-propietario.page';

const routes: Routes = [
  {
    path: '',
    component: CitasPropietariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CitasPropietarioPageRoutingModule {}
