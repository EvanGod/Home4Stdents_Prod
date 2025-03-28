import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValidarIdentidadPageRoutingModule } from './validar-identidad-routing.module';

import { ValidarIdentidadPage } from './validar-identidad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValidarIdentidadPageRoutingModule
  ],
  declarations: [ValidarIdentidadPage]
})
export class ValidarIdentidadPageModule {}
