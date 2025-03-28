import { Component, OnInit } from '@angular/core';
import { ToastController, NavController, LoadingController } from '@ionic/angular';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-mis-citas',
  templateUrl: './mis-citas.page.html',
  styleUrls: ['./mis-citas.page.scss'],
  standalone: false
})
export class MisCitasPage implements OnInit {
  citas: any[] = [];

  constructor(
    private toastCtrl: ToastController,
    private navCtrl: NavController,
    private authService: AuthService,
    private loadingCtrl: LoadingController
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
    
    if (userData && userData.userType === 'quiero-rentar') {
      this.loadCitas();
    } else {
      this.navCtrl.navigateRoot('/login');
    }
  }

  async loadCitas() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando citas...',
      spinner: 'bubbles',
      duration: 5000 
    });

    await loading.present();

    try {
      this.citas = await this.authService.getCitasSentByCurrentUser();
    } catch (error) {
      console.error('Error al cargar las citas:', error);
      this.mostrarToast('Error al cargar las citas', 'danger');
    }finally {
      loading.dismiss(); 
    }
  }

  getEstadoColor(estado: string): string {
    switch (estado) {
      case 'Aceptada':
        return 'success';
      case 'Rechazada':
        return 'danger';
      default:
        return 'warning';
    }
  }

  refreshCitas(event: any) {
    setTimeout(() => {
      this.loadCitas();
      event.target.complete();
      this.mostrarToast('Citas actualizadas.', 'primary');
    }, 1500);
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

  verCitas() {
    this.navCtrl.navigateForward('/mis-citas');
  }

  cerrarSesion() {
    localStorage.removeItem('userToken');
    this.navCtrl.navigateRoot('/login');
  }
}
