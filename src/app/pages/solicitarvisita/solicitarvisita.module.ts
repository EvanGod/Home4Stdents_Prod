import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolicitarvisitaPageRoutingModule } from './solicitarvisita-routing.module';

import { SolicitarvisitaPage } from './solicitarvisita.page';

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./solicitarvisita.page').then(m => m.SolicitarvisitaPage)
  }
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolicitarvisitaPageRoutingModule
  ],
  // declarations: [SolicitarvisitaPage]
})
export class SolicitarvisitaPageModule {}
