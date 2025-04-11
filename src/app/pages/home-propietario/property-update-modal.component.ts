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
  <ion-item lines="none">
    <ion-label position="stacked">Imágenes</ion-label>
    <input type="file" (change)="onImageSelected($event)" multiple accept="image/*">
  </ion-item>

  <ion-grid *ngIf="propertyImages?.length">
    <ion-row>
      <ion-col size="4" *ngFor="let img of propertyImages; let i = index">
        <img [src]="img" alt="Imagen {{ i + 1 }}" style="width: 100%; border-radius: 8px;">
      </ion-col>
    </ion-row>
  </ion-grid>

  <!-- Tipo de propiedad -->
  <ion-item>
    <ion-label position="stacked">Tipo de Propiedad</ion-label>
  </ion-item>
  <ion-radio-group [(ngModel)]="form.tipo" (ionChange)="onPropertyTypeChange()">
    <ion-list>
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
    </ion-list>
  </ion-radio-group>

  <!-- Precio -->
  <ion-item>
    <ion-label position="stacked">Precio</ion-label>
    <ion-input type="number" [(ngModel)]="form.precio" placeholder="Ingresa el precio"></ion-input>
  </ion-item>

  <!-- Habitaciones -->
  <ion-item>
    <ion-label position="stacked">Habitaciones</ion-label>
    <ion-select [(ngModel)]="form.habitaciones" [disabled]="disableRoomsAndBathrooms">
      <ion-select-option value="1">1</ion-select-option>
      <ion-select-option value="2">2</ion-select-option>
      <ion-select-option value="3">3</ion-select-option>
      <ion-select-option value="4+">4+</ion-select-option>
    </ion-select>
  </ion-item>

  <!-- Baños -->
  <ion-item>
    <ion-label position="stacked">Baños</ion-label>
    <ion-select [(ngModel)]="form.banos" [disabled]="disableRoomsAndBathrooms">
      <ion-select-option value="1">1</ion-select-option>
      <ion-select-option value="2">2</ion-select-option>
      <ion-select-option value="3+">3+</ion-select-option>
    </ion-select>
  </ion-item>

  <!-- Estacionamiento -->
  <ion-item>
    <ion-label position="stacked">Estacionamiento</ion-label>
    <ion-select [(ngModel)]="form.estacionamiento">
      <ion-select-option value="0">No</ion-select-option>
      <ion-select-option value="1">1</ion-select-option>
      <ion-select-option value="2+">2+</ion-select-option>
    </ion-select>
  </ion-item>

  <!-- Especificaciones adicionales -->
  <ion-item>
    <ion-label position="stacked">Especificaciones adicionales</ion-label>
    <ion-textarea [(ngModel)]="form.especificaciones_adicionales" placeholder="Escribe aquí detalles adicionales"></ion-textarea>
  </ion-item>

  <!-- Servicios -->
  <ion-item>
    <ion-label>Servicios</ion-label>
  </ion-item>
  <ion-grid>
    <ion-row>
      <ion-col size="6">
        <ion-item lines="none">
          <ion-checkbox slot="start" [(ngModel)]="form.servicios.agua"></ion-checkbox>
          <ion-label>Agua</ion-label>
        </ion-item>
        <ion-item lines="none">
          <ion-checkbox slot="start" [(ngModel)]="form.servicios.luz"></ion-checkbox>
          <ion-label>Luz</ion-label>
        </ion-item>
      </ion-col>
      <ion-col size="6">
        <ion-item lines="none">
          <ion-checkbox slot="start" [(ngModel)]="form.servicios.internet"></ion-checkbox>
          <ion-label>Internet</ion-label>
        </ion-item>
        <ion-item lines="none">
          <ion-checkbox slot="start" [(ngModel)]="form.servicios.gas"></ion-checkbox>
          <ion-label>Gas</ion-label>
        </ion-item>
      </ion-col>
    </ion-row>
  </ion-grid>

  <!-- Documentos -->
  <ion-item>
    <ion-label>Documentación</ion-label>
  </ion-item>
  <ion-grid>
    <ion-row>
      <ion-col size="6">
        <ion-item lines="none">
          <ion-checkbox slot="start" [(ngModel)]="form.identidad.ine" (ionChange)="onIneChange()"></ion-checkbox>
          <ion-label>INE</ion-label>
        </ion-item>
      </ion-col>
      <ion-col size="6">
        <ion-item lines="none">
          <ion-checkbox slot="start" [(ngModel)]="form.identidad.pasaporte" (ionChange)="onPasaporteChange()"></ion-checkbox>
          <ion-label>Pasaporte</ion-label>
        </ion-item>
      </ion-col>
    </ion-row>
  </ion-grid>

  <ion-item *ngIf="form.identidad.ine || form.identidad.pasaporte">
    <ion-label>Sube tu documento:</ion-label>
    <input type="file" (change)="onFileSelected($event)" accept="image/*">
  </ion-item>

  <div class="document-preview" *ngIf="form.documentPreview" style="text-align: center; margin-top: 10px;">
    <img [src]="form.documentPreview" alt="Documento" style="width: 100px; border-radius: 8px;">
  </div>

  <!-- Botón de actualización -->
  <ion-button expand="block" (click)="update()" color="primary" class="ion-margin-top">
    Actualizar Propiedad
  </ion-button>

</ion-content>
`,
  standalone: true,
  
  imports: [IonicModule, CommonModule, FormsModule],
  styles: [`
    ion-item {
      --background: #fff;
      --border-radius: 10px;
      margin-bottom: 10px;
    }

    ion-label {
      font-weight: 500;
    }

    input[type="file"] {
      margin-top: 8px;
    }

    .document-preview img {
      border: 1px solid #ccc;
      padding: 4px;
    }

    ion-header {
      --background: #3880ff;
      color: #fff;
    }

    ion-title {
      font-weight: bold;
      color: #fff;
    }

    ion-button {
      --border-radius: 12px;
      font-weight: bold;
    }

    ion-content {
      background: #f4f5f8;
    }

    .ion-padding {
      padding: 16px;
    }
  `]
})
export class PropertyUpdateModalComponent implements OnInit {
  @Input() property: any;
  propertyImages: string[] = [];
  disableRoomsAndBathrooms: boolean = false;

  form: any = {
    tipo: '',
    precio: '',
    habitaciones: '',
    banos: '',
    estacionamiento: '',
    especificaciones_adicionales: '',
    servicios: {
      agua: false,
      luz: false,
      internet: false,
      gas: false
    },
    identidad: {
      ine: false,
      pasaporte: false
    },
    imagenes: [],
    document: null,
    documentPreview: null
  };

  constructor(private modalController: ModalController) {}

  ngOnInit() {
    if (this.property) {
      this.form = {
        tipo: this.property.tipo || '',
        precio: this.property.precio || '',
        habitaciones: this.property.habitaciones || '',
        banos: this.property.banos || '',
        estacionamiento: this.property.estacionamiento || '',
        especificaciones_adicionales: this.property.especificaciones_adicionales || '',
        servicios: {
          agua: this.property.servicios?.agua || false,
          luz: this.property.servicios?.luz || false,
          internet: this.property.servicios?.internet || false,
          gas: this.property.servicios?.gas || false
        },
        identidad: {
          ine: this.property.identidad?.ine || false,
          pasaporte: this.property.identidad?.pasaporte || false
        },
        imagenes: this.property.imagenes || [],
        document: this.property.document || null,
        documentPreview: this.property.document || null
      };

      this.propertyImages = [...this.form.imagenes];
      this.onPropertyTypeChange(); // Aplica regla si ya está definido tipo
    }
  }

  onImageSelected(event: any) {
    const files: FileList = event.target.files;
    if (files && files.length > 0) {
      Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.propertyImages.push(e.target.result);
          this.form.imagenes = [...this.propertyImages];
        };
        reader.readAsDataURL(file);
      });
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.form.documentPreview = e.target.result;
        this.form.document = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  onIneChange() {
    if (this.form.identidad.ine) {
      this.form.identidad.pasaporte = false;
    }
  }

  onPasaporteChange() {
    if (this.form.identidad.pasaporte) {
      this.form.identidad.ine = false;
    }
  }

  onPropertyTypeChange() {
    const tipo = this.form.tipo?.toLowerCase();
    if (tipo === 'cuarto') {
      this.form.habitaciones = '1';
      this.form.banos = '1';
      this.disableRoomsAndBathrooms = true;
    } else {
      this.disableRoomsAndBathrooms = false;
    }
  }

  dismiss() {
    this.modalController.dismiss();
  }

  update() {
    if (!this.form.precio || !this.form.tipo) {
      alert('Por favor, completa los campos obligatorios.');
      return;
    }

    this.modalController.dismiss({
      updatedProperty: this.form
    });
  }
}
