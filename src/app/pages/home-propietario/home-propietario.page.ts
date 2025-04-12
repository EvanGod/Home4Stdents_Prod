import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { AuthService } from '../../../services/auth.service';
import { ModalController } from '@ionic/angular';
import { PropertyUpdateModalComponent } from './property-update-modal.component';
import { PropertyDeleteModalComponent } from './property-delete-modal.component';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-home-propietario',
  templateUrl: './home-propietario.page.html',
  styleUrls: ['./home-propietario.page.scss'],
  standalone: false
})
export class HomePropietarioPage implements OnInit {
  userProperties: any[] = [];
  loading: any;

  constructor(
    private authService: AuthService,
    private modalController: ModalController,
    private navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private toastController: ToastController  // Inyecta ToastController

  ) {}

  ngOnInit() {
  }

  ionViewWillEnter() {
    // Se ejecuta cada vez que se entra o regresa a esta página
    this.checkUserAuthentication();
  }

  async presentToast(message: string, color: string = 'success') {
    const toast = await this.toastController.create({
      message,
      duration: 2000,  // Duración en milisegundos
      color,
      position: 'bottom'
    });
    await toast.present();
  }
  

  async checkUserAuthentication() {
    const storedUserData = localStorage.getItem('userData');
    
    if (!storedUserData) {
      this.navCtrl.navigateRoot('/login');
      await this.dismissLoading(); // Asegúrate de cerrar el spinner
      return;
    }
  
    const userData = JSON.parse(storedUserData);
  
    if (userData && userData.userType === 'propietario') {
      await this.presentLoading(); // Mostrar el spinner
  
      // Establecer un temporizador de 5 segundos para cerrar el spinner si no hay propiedades
      const timeout = setTimeout(() => {
        console.log('Temporizador: cerrando spinner después de 5 segundos');
        this.dismissLoading();  // Cerrar spinner después del timeout
      }, 5000); // 5 segundos
  
      try {
        await this.loadUserProperties(); // Cargar propiedades
        clearTimeout(timeout); // Si ya se cargaron las propiedades, se cancela el temporizador
      } catch (error) {
        console.error('Error al cargar propiedades:', error);
      } finally {
        console.log('Ejecutando finalmente, cerrando spinner');
        // Siempre cerrar el loading en el bloque finally
        await this.dismissLoading();
      }
    } else {
      this.navCtrl.navigateRoot('/login');
    }
  }
  
  async dismissLoading() {
    if (this.loading) {
      try {
        console.log('Cerrando el spinner');
        await this.loading.dismiss();
        this.loading = null;  // Asegúrate de limpiar el objeto loading
      } catch (e) {
        console.warn('El loading ya se cerró o no estaba disponible', e);
      }
    } else {
      console.warn('No se encontró el spinner para cerrar');
    }
  }
  
  async loadUserProperties() {
    try {
      this.userProperties = await this.authService.getUserProperties();
      console.log('Propiedades del usuario:', this.userProperties);
    } catch (error) {
      console.error('Error al cargar propiedades:', error);
    }
  }
  
  async presentLoading() {
    this.loading = await this.loadingCtrl.create({
      message: 'Cargando propiedades...',
      spinner: 'bubbles',
      translucent: true
    });
    await this.loading.present();
  }
  


  async openUpdateModal(property: any) {
    const modal = await this.modalController.create({
      component: PropertyUpdateModalComponent,
      componentProps: { property: { ...property } }
    });
    await modal.present();
  
    const { data } = await modal.onWillDismiss();
    if (data && data.updatedProperty) {
      try {
        await this.authService.updateProperty(property.id, data.updatedProperty);
        await this.presentToast('Propiedad actualizada con éxito.');
        this.loadUserProperties();
      } catch (error) {
        console.error('Error al actualizar propiedad:', error);
        await this.presentToast('Error al actualizar propiedad.', 'danger');
      }
    }
  }
  

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
        this.userProperties = this.userProperties.filter(p => p.id !== property.id);
        await this.presentToast('Propiedad eliminada con éxito.');
      } catch (error) {
        console.error('Error al eliminar propiedad:', error);
        await this.presentToast('Error al eliminar propiedad.', 'danger');
      }
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

  verDetalle(propiedad: any) {
    this.navCtrl.navigateForward(['/detalle'], { state: { id: propiedad.id } });
  }

  editarPropiedad(propiedad: any) {
    console.log('Editar propiedad:', propiedad);
  }

  eliminarPropiedad(propiedad: any) {
    console.log('Eliminar propiedad:', propiedad);
  }
}
