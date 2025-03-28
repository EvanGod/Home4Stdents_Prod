import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerCitasProPageRoutingModule } from './ver-citas-pro-routing.module';

import { VerCitasProPage } from './ver-citas-pro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerCitasProPageRoutingModule
  ],
  declarations: [VerCitasProPage]
})
export class VerCitasProPageModule {}
