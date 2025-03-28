import { Component, Input } from '@angular/core';
import { ModalController, IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-property-delete-modal',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Confirmar Eliminación</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <p>¿Estás seguro de que deseas eliminar la propiedad "{{ property.tipo }}"?</p>
      <ion-button expand="block" color="danger" (click)="confirmDelete()">Eliminar</ion-button>
      <ion-button expand="block" (click)="dismiss()">Cancelar</ion-button>
    </ion-content>
  `,
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class PropertyDeleteModalComponent {
  @Input() property: any;
  constructor(private modalController: ModalController) {}
  dismiss() {
    this.modalController.dismiss();
  }
  confirmDelete() {
    this.modalController.dismiss({ deleteConfirmed: true });
  }
}
