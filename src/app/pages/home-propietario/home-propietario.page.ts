import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../../../services/auth.service'; // Ajusta la ruta según tu proyecto
import { ModalController } from '@ionic/angular';
import { PropertyUpdateModalComponent } from './property-update-modal.component'; // Adjust the path as needed
import { PropertyDeleteModalComponent } from './property-delete-modal.component'; // Adjust the path as needed

@Component({
  selector: 'app-home-propietario',
  templateUrl: './home-propietario.page.html',
  styleUrls: ['./home-propietario.page.scss'],
  standalone: false
})
export class HomePropietarioPage implements OnInit {
  userProperties: any[] = []; // Arreglo donde se guardarán las propiedades del usuario

  constructor(
    private authService: AuthService,
    private modalController: ModalController,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.checkUserAuthentication();
  }

  async checkUserAuthentication() {
    const storedUserData = localStorage.getItem('userData');
    
    if (!storedUserData) {
      this.navCtrl.navigateRoot('/login');
      return;
    }

    const userData = JSON.parse(storedUserData);
    
    if (userData && userData.userType === 'propietario') {
      this.loadUserProperties();
    } else {
      this.navCtrl.navigateRoot('/login');
    }
  }

 // Abre el modal de actualización y actualiza la propiedad en Firestore.
 async openUpdateModal(property: any) {
  const modal = await this.modalController.create({
    component: PropertyUpdateModalComponent,
    componentProps: { property: { ...property } } // Clona la propiedad para no modificar la original directamente
  });
  await modal.present();

  const { data } = await modal.onWillDismiss();
  if (data && data.updatedProperty) {
    try {
      await this.authService.updateProperty(property.id, data.updatedProperty);
      console.log('Propiedad actualizada correctamente');
      // Puedes actualizar la lista local de propiedades o recargar la lista.
      this.loadUserProperties();
    } catch (error) {
      console.error('Error al actualizar propiedad:', error);
    }
  }
}

// Abre el modal de eliminación y elimina la propiedad en Firestore si se confirma.
async openDeleteModal(property: any) {
  const modal = await this.modalController.create({
    component: PropertyDeleteModalComponent,
    componentProps: { property }
  });
  await modal.present();

  const { data } = await modal.onWillDismiss();
  if (data && data.deleteConfirmed) {
    try {
      await this.authService.deleteProperty(property.id);
      console.log('Propiedad eliminada correctamente');
      // Actualiza la lista local eliminando el elemento eliminado.
      this.userProperties = this.userProperties.filter(p => p.id !== property.id);
    } catch (error) {
      console.error('Error al eliminar propiedad:', error);
    }
  }
}

  // Llama a la función del servicio para obtener las propiedades del usuario actual
  async loadUserProperties() {
    try {
      this.userProperties = await this.authService.getUserProperties();
      console.log('Propiedades del usuario:', this.userProperties);
    } catch (error) {
      console.error('Error al cargar propiedades:', error);
    }
  }

  verCitas() {
    this.navCtrl.navigateForward('/citas-propietario');
  }

  publicarPropiedad() {
    this.navCtrl.navigateForward('/property-upload');
  }

  cerrarSesion() {
    localStorage.removeItem('userData');
    this.navCtrl.navigateRoot('/login');
  }

  // Puedes definir funciones para editar o ver en detalle la propiedad
  verDetalle(propiedad: any) {
    // Por ejemplo, navega a una página de detalle pasando el id de la propiedad
    this.navCtrl.navigateForward(['/detalle'], { state: { id: propiedad.id } });
  }

  editarPropiedad(propiedad: any) {
    // Lógica para editar la propiedad
    console.log('Editar propiedad:', propiedad);
  }

  eliminarPropiedad(propiedad: any) {
    // Lógica para eliminar la propiedad
    console.log('Eliminar propiedad:', propiedad);
  }
}
