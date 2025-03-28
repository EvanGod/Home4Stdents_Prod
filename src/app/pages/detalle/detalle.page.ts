import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service'; // Importamos el servicio de autenticación


declare var google: any;

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
  standalone: false
})
export class DetallePage implements OnInit {
  propiedad: any = { imagenes: [] };
  imagenActualIndex: number = 0;

  constructor(
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private router: Router,
    private authService: AuthService // Inyectamos el servicio
  ) {}

  async ngOnInit(): Promise<void> {
    const storedUserData = localStorage.getItem('userData');
    
    if (!storedUserData) {
      this.navCtrl.navigateRoot('/login');
      return;
    }

    const userData = JSON.parse(storedUserData);
    
    if (userData && userData.userType === 'quiero-rentar') {

    // Leemos el id enviado desde SearchPage
    const nav = this.router.getCurrentNavigation();
    const idRecibido = nav?.extras?.state?.['id'];
    console.log("ID recibido en Detalle:", idRecibido);

    if (!idRecibido) {
      // Si no se recibió id, volvemos a Search
      this.navCtrl.navigateBack(['/search']);
      return;
    }

    try {
      // Consultamos en Firestore el documento con ese id usando AuthService
      const propiedad = await this.authService.getPropertyById(idRecibido);
      if (!propiedad) {
        // Si la propiedad no existe, volvemos a Search
        this.navCtrl.navigateBack(['/search']);
      } else {
        // Almacenamos la información de la propiedad y agregamos el id
        this.propiedad = { id: idRecibido, ...propiedad };

        // Inicializamos el índice del carrusel si existen imágenes
        if (this.propiedad.imagenes && this.propiedad.imagenes.length > 0) {
          this.imagenActualIndex = 0;
        }
        console.log('Propiedad obtenida:', this.propiedad);
        this.loadMap();
      }
    } catch (error) {
      console.error('Error al obtener la propiedad:', error);
      this.navCtrl.navigateBack(['/search']);
    }
  }else {
    this.navCtrl.navigateRoot('/login');
  }}

  loadMap() {
    // Verifica si la API de Google Maps está cargada
    if (typeof google !== 'undefined' && google.maps) {
      if (this.propiedad.latitud && this.propiedad.longitud) {
        const mapElement = document.getElementById('map')!;
        const map = new google.maps.Map(mapElement, {
          center: {
            lat: this.propiedad.latitud,
            lng: this.propiedad.longitud
          },
          zoom: 14
        });

        // Crear el marcador en la ubicación de la propiedad
        const marker = new google.maps.Marker({
          position: {
            lat: this.propiedad.latitud,
            lng: this.propiedad.longitud
          },
          map: map,
          title: 'Ubicación de la propiedad'
        });
      } else {
        console.error('Faltan las coordenadas de latitud o longitud.');
      }
    } else {
      console.error('Google Maps API no está disponible.');
    }
  }

  async rentar(): Promise<void> {
    const alert = await this.alertCtrl.create({
      header: 'Confirmación',
      message: '¿Quieres agendar una cita antes de rentar?',
      buttons: [
        {
          text: 'Sí, agendar cita',
          handler: () => {
            console.log('ID enviado a solicitarvisita:', this.propiedad.id);
            this.navCtrl.navigateForward(['/solicitarvisita'], {
              queryParams: { id: this.propiedad.id }
            });
          }
        },
        {
          text: 'No, ir al contrato',
          handler: () => {
            console.log('ID enviado a contrato:', this.propiedad.id);
            this.navCtrl.navigateForward(['/contrato'], {
              queryParams: { id: this.propiedad.id }
            });
          }
        }
      ]      
    });
    await alert.present();
  }

  cambiarImagen(direccion: number): void {
    const total = this.propiedad.imagenes?.length || 0;
    if (total > 0) {
      this.imagenActualIndex = (this.imagenActualIndex + direccion + total) % total;
    }
  }

  handleImageError(): void {
    console.error(
      'Error: La imagen no se pudo cargar:',
      this.propiedad.imagenes[this.imagenActualIndex]
    );
  }
}
