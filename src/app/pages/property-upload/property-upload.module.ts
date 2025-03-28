import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PropertyUploadPageRoutingModule } from './property-upload-routing.module';

import { PropertyUploadPage } from './property-upload.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PropertyUploadPageRoutingModule
  ],
  declarations: [PropertyUploadPage]
})
export class PropertyUploadPageModule {}
