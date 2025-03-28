import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-citas-propietarios',
  templateUrl: './citas-propietario.page.html',
  styleUrls: ['./citas-propietario.page.scss'],
  standalone: false
})
export class CitasPropietariosPage implements OnInit {
  // Inicialmente, el array se encuentra vacío y se llenará con los datos de Firestore
  citas: any[] = [];
  loading: any;

  constructor(
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private navCtrl: NavController,
    private authService: AuthService,
    private loadingCtrl: LoadingController
  ) {}

  async ngOnInit() {
    this.checkUserAuthentication();
  }

  // Verificación de autenticación y tipo de usuario
  async checkUserAuthentication() {
    const storedUserData = localStorage.getItem('userData');
    
    if (!storedUserData) {
      this.navCtrl.navigateRoot('/login'); // Si no está autenticado, redirige al login
      return;
    }

    const userData = JSON.parse(storedUserData);
    
    if (userData && userData.userType === 'propietario') {
      this.presentLoading();
      try {
        this.citas = await this.authService.getCitasOfCurrentUser();
        console.log('Citas del usuario actual:', this.citas);
        if (this.citas.length === 0) {
          setTimeout(() => {
            this.loading.dismiss(); // Si no hay citas, oculta el loading después de 5 segundos
          }, 5000);
        } else {
          this.loading.dismiss(); // Si hay citas, oculta el loading inmediatamente
        }
      } catch (error) {
        console.error('Error al obtener las citas:', error);
        this.mostrarToast('Error al cargar las citas', 'danger');
        this.loading.dismiss();
      }
    } else {
      this.navCtrl.navigateRoot('/login'); // Si no es propietario, redirige al login
    }
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({
      message: 'Cargando citas...',
      spinner: 'bubbles', // Establecemos el tipo de spinner como 'bubbles'
      duration: 5000, // Desaparece después de 5 segundos si no se resuelve
      translucent: true
    });
    await this.loading.present();
  }
  
  async aceptarCita(id: string) {
    const alert = await this.alertCtrl.create({
      header: 'Confirmar',
      message: '¿Estás seguro de aceptar esta cita?',
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Aceptar',
          handler: async () => {
            try {
              // Actualizamos el status a 'aceptada'
              await this.authService.updateCitaStatus(id, 'aceptada');
              this.mostrarToast('Cita aceptada correctamente.', 'success');
              // Opcional: refrescar la lista de citas
              this.citas = await this.authService.getCitasOfCurrentUser();
            } catch (error) {
              console.error('Error actualizando el status de la cita:', error);
              this.mostrarToast('Error al actualizar el status de la cita.', 'danger');
            }
          }
        }
      ]
    });
    await alert.present();
  }

  async rechazarCita(id: string) {
    const alert = await this.alertCtrl.create({
      header: 'Confirmar',
      message: '¿Estás seguro de rechazar esta cita?',
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Rechazar',
          handler: async () => {
            try {
              // Actualizamos el status a 'rechazada'
              await this.authService.updateCitaStatus(id, 'rechazada');
              this.mostrarToast('Cita rechazada.', 'danger');
              // Opcional: refrescar la lista de citas
              this.citas = await this.authService.getCitasOfCurrentUser();
            } catch (error) {
              console.error('Error actualizando el status de la cita:', error);
              this.mostrarToast('Error al actualizar el status de la cita.', 'danger');
            }
          }
        }
      ]
    });
    await alert.present();
  }

  async mostrarToast(mensaje: string, color: string) {
    const toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 2000,
      color: color,
      position: 'top'
    });
    toast.present();
  }

  // Función para refrescar las citas (por ejemplo, en un pull-to-refresh)
  refreshCitas(event: any) {
    setTimeout(async () => {
      try {
        this.citas = await this.authService.getCitasOfCurrentUser();
        this.mostrarToast('Citas actualizadas.', 'primary');
      } catch (error) {
        this.mostrarToast('Error al actualizar las citas', 'danger');
      }
      event.target.complete();
    }, 1500);
  }

  verCitas() {
    this.navCtrl.navigateForward('/citas-propietarios');
  }

  publicarPropiedad() {
    this.navCtrl.navigateForward('/property-upload');
  }

  cerrarSesion() {
    localStorage.removeItem('userData'); 
    this.navCtrl.navigateRoot('/login');
  }
}
