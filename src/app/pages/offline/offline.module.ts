import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OfflinePage } from './offline.page';

const routes: Routes = [
  {
    path: '',
    component: OfflinePage
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OfflinePage]
})
export class OfflinePageModule {}
