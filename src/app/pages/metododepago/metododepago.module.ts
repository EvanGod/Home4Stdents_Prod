import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MetododepagoPageRoutingModule } from './metododepago-routing.module';

import { MetododepagoPage } from './metododepago.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MetododepagoPageRoutingModule
  ],
  declarations: [MetododepagoPage]
})
export class MetododepagoPageModule {}
