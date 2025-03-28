import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController,ToastController, IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service'; // Ajusta la ruta si está en otro lado
import { Auth } from '@angular/fire/auth'; // Para inyectar y acceder a currentUser si lo necesitas

@Component({
  selector: 'app-solicitarvisita',
  templateUrl: './solicitarvisita.page.html',
  styleUrls: ['./solicitarvisita.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class SolicitarvisitaPage implements OnInit {
  propiedad: any = {};        // Almacena la propiedad obtenida
  mostrarFormulario = false;
  fecha: string = '';
  hora: string = '';
  idPropiedad: string = '';   // Se asigna el ID recibido

  constructor(
    private navCtrl: NavController,
    private router: Router,
    private toastController: ToastController,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private auth: Auth           // <-- Inyectamos Auth si lo necesitamos directamente
  ) {}

  ngOnInit() {
    const storedUserData = localStorage.getItem('userData');
    
    if (!storedUserData) {
      this.navCtrl.navigateRoot('/login');
      return;
    }

    const userData = JSON.parse(storedUserData);
    
    if (userData && userData.userType === 'quiero-rentar') {
    // Leer el id de los queryParams
    this.activatedRoute.queryParams.subscribe(params => {
      this.idPropiedad = params['id'];
      console.log('ID recibido en solicitarvisita:', this.idPropiedad);

      if (this.idPropiedad) {
        // Llamar a la función que obtiene la propiedad
        this.getPropertyData();
      }
    });}else{
      this.navCtrl.navigateRoot('/login');
    }
  }

  async getPropertyData() {
    try {
      // Obtenemos la propiedad desde AuthService
      const property = await this.authService.getPropertyById(this.idPropiedad);
      if (property) {
        // Construimos this.propiedad con el id
        this.propiedad = { id: this.idPropiedad, ...property };

        // ⭐ Si 'servicios' viene como objeto y no como array, lo convertimos:
        if (this.propiedad.servicios && !Array.isArray(this.propiedad.servicios)) {
          this.propiedad.servicios = this.convertirServiciosAArray(this.propiedad.servicios);
        }

        console.log('Propiedad obtenida:', this.propiedad);
      } else {
        console.log('No se encontró la propiedad con el id:', this.idPropiedad);
      }
    } catch (error) {
      console.error('Error al obtener la propiedad:', error);
    }
  }

  /**
   * Convierte un objeto de servicios en un array para que *ngFor funcione.
   * Ejemplo si el documento en Firestore tiene:
   * "servicios": { wifi: true, estacionamiento: true }
   */
  private convertirServiciosAArray(serviciosObj: any): any[] {
    return Object.keys(serviciosObj).map(key => {
      return {
        nombre: key,
        // En este ejemplo, si el valor es true, usamos el mismo nombre como icono:
        icono: serviciosObj[key] === true ? key : serviciosObj[key]
      };
    });
  }

  // Mostrar el formulario de fecha/hora
  solicitarVisita() {
    this.mostrarFormulario = true;
  }

  // Confirmar cita
// Confirmar cita
async confirmarCita() {
  if (!this.fecha || !this.hora) {
    alert("Por favor, selecciona una fecha y hora.");
    return;
  }

  // 1. Obtenemos el usuario actual (si estás logueado)
  const currentUser = this.auth.currentUser;
  if (!currentUser) {
    alert("Debes iniciar sesión para solicitar una cita.");
    return;
  }
  const userId = currentUser.uid;

  // 2. Obtenemos el ownerId de la propiedad
  const ownerId = this.propiedad.ownerId;
  if (!ownerId) {
    alert("No se encontró el ID del propietario en la propiedad.");
    return;
  }

  try {
    // 3. Creamos la cita usando el servicio, enviando también el id de la propiedad
    await this.authService.createCita(ownerId, userId, this.idPropiedad, this.fecha, this.hora);

    // 4. Mostramos el toast de confirmación
    const toast = await this.toastController.create({
      message: "El arrendatario está por confirmar tu visita.",
      duration: 3000,
      position: "top",
      color: "success"
    });
    await toast.present();

    // 5. Navegamos a la página deseada
    this.router.navigate(['/search']);
  } catch (error) {
    console.error('Error al crear la cita:', error);
    const toast = await this.toastController.create({
      message: "Ocurrió un error al crear la cita. Por favor, inténtalo de nuevo.",
      duration: 3000,
      position: "top",
      color: "danger"
    });
    await toast.present();
  }
}

}
