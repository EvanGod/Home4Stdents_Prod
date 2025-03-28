import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CitasPropietarioPageRoutingModule } from './citas-propietario-routing.module';

import { CitasPropietariosPage } from './citas-propietario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CitasPropietarioPageRoutingModule
  ],
  declarations: [CitasPropietariosPage]
})
export class CitasPropietarioPageModule {}
