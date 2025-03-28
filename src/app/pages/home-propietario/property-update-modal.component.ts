import { Component, Input, OnInit } from '@angular/core';
import { ModalController, IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-property-update-modal',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Actualizar Propiedad</ion-title>
        <ion-buttons slot="end">
          <ion-button (click)="dismiss()">Cerrar</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    
    <ion-content class="ion-padding">
      <!-- Subir imágenes -->
      <ion-item>
        <ion-label>Subir Imágenes</ion-label>
        <input type="file" (change)="onImageSelected($event)" multiple accept="image/*">
      </ion-item>
      <div class="image-preview-container" *ngIf="propertyImages?.length">
        <div *ngFor="let img of propertyImages; let i = index" class="image-preview">
          <img [src]="img" alt="Imagen {{ i }}" style="width: 100px; height: auto;">
        </div>
      </div>

      <!-- Tipo de propiedad -->
      <ion-item>
        <ion-label>Tipo:</ion-label>
        <ion-radio-group [(ngModel)]="property.propertyType">
          <ion-item>
            <ion-radio slot="start" value="casa"></ion-radio>
            <ion-label>Casa</ion-label>
          </ion-item>
          <ion-item>
            <ion-radio slot="start" value="departamento"></ion-radio>
            <ion-label>Departamento</ion-label>
          </ion-item>
          <ion-item>
            <ion-radio slot="start" value="cuarto"></ion-radio>
            <ion-label>Cuarto</ion-label>
          </ion-item>
        </ion-radio-group>
      </ion-item>

      <!-- Precio -->
      <ion-item>
        <ion-label position="stacked">Precio</ion-label>
        <ion-input type="number" [(ngModel)]="property.price" placeholder="Ingresa el precio"></ion-input>
      </ion-item>

      <!-- Habitaciones -->
      <ion-item>
        <ion-label>Habitaciones:</ion-label>
        <ion-select [(ngModel)]="property.rooms">
          <ion-select-option value="1">1</ion-select-option>
          <ion-select-option value="2">2</ion-select-option>
          <ion-select-option value="3">3</ion-select-option>
          <ion-select-option value="4+">4+</ion-select-option>
        </ion-select>
      </ion-item>

      <!-- Baños -->
      <ion-item>
        <ion-label>Baños:</ion-label>
        <ion-select [(ngModel)]="property.bathrooms">
          <ion-select-option value="1">1</ion-select-option>
          <ion-select-option value="2">2</ion-select-option>
          <ion-select-option value="3+">3+</ion-select-option>
        </ion-select>
      </ion-item>

      <!-- Estacionamiento -->
      <ion-item>
        <ion-label>Estacionamiento:</ion-label>
        <ion-select [(ngModel)]="property.parking">
          <ion-select-option value="0">No</ion-select-option>
          <ion-select-option value="1">1</ion-select-option>
          <ion-select-option value="2+">2+</ion-select-option>
        </ion-select>
      </ion-item>

      <!-- Especificaciones adicionales -->
      <ion-item>
        <ion-label position="stacked">Especificaciones adicionales</ion-label>
        <ion-textarea [(ngModel)]="property.additionalSpecs" placeholder="Escribe aquí detalles adicionales"></ion-textarea>
      </ion-item>

      <!-- Servicios -->
      <ion-item>
        <ion-label>Servicios:</ion-label>
        <ion-checkbox [(ngModel)]="property.water"></ion-checkbox>
        <ion-label>Agua</ion-label>
        <ion-checkbox [(ngModel)]="property.electricity"></ion-checkbox>
        <ion-label>Luz</ion-label>
        <ion-checkbox [(ngModel)]="property.internet"></ion-checkbox>
        <ion-label>Internet</ion-label>
        <ion-checkbox [(ngModel)]="property.gas"></ion-checkbox>
        <ion-label>Gas</ion-label>
      </ion-item>

      <!-- Validación de identidad -->
      <ion-item>
        <ion-label>Documento:</ion-label>
        <ion-checkbox [(ngModel)]="property.ineSelected"></ion-checkbox>
        <ion-label>INE</ion-label>
        <ion-checkbox [(ngModel)]="property.passportSelected"></ion-checkbox>
        <ion-label>Pasaporte</ion-label>
      </ion-item>
      <ion-item *ngIf="property.ineSelected || property.passportSelected">
        <ion-label>Sube tu documento:</ion-label>
        <input type="file" (change)="onFileSelected($event)" accept="image/*">
      </ion-item>
      <div class="document-preview" *ngIf="property.documentPreview">
        <img [src]="property.documentPreview" alt="Documento" style="width: 100px; height: auto;">
      </div>

      <ion-button expand="full" (click)="update()">Actualizar Propiedad</ion-button>
    </ion-content>
  `,
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PropertyUpdateModalComponent implements OnInit {
  @Input() property: any;
  propertyImages: string[] = [];
  
  constructor(private modalController: ModalController) {}

  ngOnInit() {
    // Si la propiedad ya tiene imágenes, las cargamos en propertyImages
    if (this.property && this.property.imagenes) {
      this.propertyImages = [...this.property.imagenes];
    }
  }

  onImageSelected(event: any) {
    const files = event.target.files;
    if (files) {
      for (let file of files) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.propertyImages.push(e.target.result);
          // Actualizamos la propiedad
          this.property.imagenes = this.propertyImages;
        };
        reader.readAsDataURL(file);
      }
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.property.documentPreview = e.target.result;
        // Puedes almacenar el documento en una propiedad, por ejemplo:
        this.property.document = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  dismiss() {
    this.modalController.dismiss();
  }

  update() {
    // Aquí podrías realizar validaciones antes de enviar los datos
    this.modalController.dismiss({ updatedProperty: this.property });
  }
}
