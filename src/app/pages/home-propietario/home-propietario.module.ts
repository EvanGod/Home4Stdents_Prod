import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePropietarioPageRoutingModule } from './home-propietario-routing.module';
import { HomePropietarioPage } from './home-propietario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePropietarioPageRoutingModule
  ],
  declarations: [HomePropietarioPage]
})
export class HomePropietarioPageModule {}
