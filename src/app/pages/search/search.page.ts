import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { runInInjectionContext, Injector } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone: false
})
export class SearchPage implements OnInit {
  filtroTipo: string = '';
  filtroUniversidad: 'UAQ' | 'ITQ' | 'UTEQ' | 'UVM' | 'UNAM' | '' = ''; 
  filtroPrecioMin: number = 1000; 
  filtroPrecioMax: number = 10000;

  propiedades: any[] = [];
  
  universidades: { [key: string]: { lat: number, lng: number } } = {
    UAQ: { lat: 20.5889168, lng: -100.4185597 },
    ITQ: { lat: 20.593303, lng: -100.4103997 },
    UTEQ: { lat: 20.6539495, lng: -100.4086687 },
    UVM: { lat: 20.709205, lng: -100.4482555 },
    UNAM: { lat: 20.7048036, lng: -100.4484412 }
  };

  noResults: boolean = false;

  constructor(
    private navCtrl: NavController,
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth,
    private injector: Injector,
    private loadingController: LoadingController
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
      this.cargarPropiedades();
    } else {
      this.navCtrl.navigateRoot('/login');
    }
  }

  async cargarPropiedades(): Promise<void> {
    const loading = await this.loadingController.create({
      spinner: 'bubbles',
      message: 'Cargando propiedades...',
      translucent: true,
      cssClass: 'custom-loading'
    });
    await loading.present();

    runInInjectionContext(this.injector, () => {
      this.afs.collection('properties')
        .valueChanges({ idField: 'id' })
        .subscribe((properties: any[]) => {
          this.propiedades = properties.map(p => {
            return {
              ...p,
              precio: p.precio || 5000,
              distancia: Math.random() * 10,
              imagen: (p.imagenes && p.imagenes.length > 0) ? p.imagenes[0] : 'assets/casa.png'
            };
          });
          console.log('Propiedades cargadas:', this.propiedades);
          loading.dismiss();
        });
    });
  }

  verDetalle(propiedad: any): void {
    console.log('Propiedad seleccionada:', propiedad);
    console.log('ID de la propiedad:', propiedad.id);
    this.navCtrl.navigateForward(['/detalle'], { state: { id: propiedad.id } });
  }

  calcularDistancia(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 6371; 
    const dLat = this.degreesToRadians(lat2 - lat1);
    const dLon = this.degreesToRadians(lon2 - lon1);
    
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.degreesToRadians(lat1)) * Math.cos(this.degreesToRadians(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
      
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distancia = R * c; 
    return distancia;
  }

  degreesToRadians(degrees: number): number {
    return degrees * (Math.PI / 180);
  }

  aplicarFiltros() {
    let propiedadesFiltradas = this.propiedades.filter(p =>
      (!this.filtroTipo || p.tipo === this.filtroTipo) &&
      p.precio >= this.filtroPrecioMin &&
      p.precio <= this.filtroPrecioMax
    );

    if (this.filtroUniversidad !== '') {
      const uniSeleccionada = this.universidades[this.filtroUniversidad];

      if (uniSeleccionada && uniSeleccionada.lat && uniSeleccionada.lng) {
        propiedadesFiltradas = propiedadesFiltradas.filter(p =>
          p.latitud && p.longitud && this.calcularDistancia(uniSeleccionada.lat, uniSeleccionada.lng, p.latitud, p.longitud) <= 3
        );
      } else {
        console.error('Datos de la universidad o propiedad no encontrados:', this.filtroUniversidad);
        propiedadesFiltradas = [];
      }
    }
    this.noResults = propiedadesFiltradas.length === 0;
    return propiedadesFiltradas;
}
  
  verCitas() {
    this.navCtrl.navigateForward('/mis-citas');
  }

  cerrarSesion() {
    localStorage.removeItem('userData'); 
    this.navCtrl.navigateRoot('/login');
  }
}