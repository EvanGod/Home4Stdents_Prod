import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropertyUploadPage } from './property-upload.page';

const routes: Routes = [
  {
    path: '',
    component: PropertyUploadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropertyUploadPageRoutingModule {}
