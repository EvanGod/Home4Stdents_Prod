import { Component, runInInjectionContext, Injector, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { NavController, AlertController, LoadingController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';

declare var google: any;
@Component({
  selector: 'app-property-upload',
  templateUrl: './property-upload.page.html',
  styleUrls: ['./property-upload.page.scss'],
  standalone: false
})
export class PropertyUploadPage implements AfterViewInit{
  
  // URL para mostrar el mapa (opcional)
  //googleMapUrl: string = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyAeAPQEqCfKYwd8C6ZewS_amcJ7Xm6RDvA&q=Querétaro,México';

  // Variables vinculadas al formulario
  propertyType: string = '';
  rooms: number = 1;
  bathrooms: number = 1;
  parking: number = 0;
  additionalSpecs: string = '';
  price: number | null = null;

  // Servicios disponibles
  water: boolean = false;
  electricity: boolean = false;
  internet: boolean = false;
  gas: boolean = false;

  // Validación de identidad
  ineSelected: boolean = false;
  passportSelected: boolean = false;
  documentPreview: string | ArrayBuffer | null = null;
  selectedDocument?: File;

  // Imágenes de la propiedad
  propertyImages: string[] = [];


  @ViewChild('addressInput', { static: false }) addressInputRef: ElementRef = {} as ElementRef;


  address: string = '';
  autocomplete: any;
  latitude: number | null = null;
  longitude: number | null = null;
  map: any;
  marker: any;

  constructor(
    private navCtrl: NavController,
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth,
    private injector: Injector,
    private alert: AlertController,
    private loadingController: LoadingController
  ) {}
    onBack() {
      // Usamos NavController para ir hacia atrás
      this.navCtrl.back();
    }
  ngAfterViewInit() {
    this.checkUserAuthentication();
    setTimeout(() => {
      this.initMap();
    }, 500); // Retrasar la inicialización para asegurar que el mapa esté listo
  }

  async checkUserAuthentication() {
    const storedUserData = localStorage.getItem('userData');
    
    if (!storedUserData) {
      this.navCtrl.navigateRoot('/login');
      return;
    }

    const userData = JSON.parse(storedUserData);
    
    if (userData.userType !== 'propietario') {
      this.navCtrl.navigateRoot('/login');
      return;
    } 
  }
  initMap() {
    const mapElement = document.getElementById('map')!;
    this.map = new google.maps.Map(mapElement, {
      center: { lat: 20.5937, lng: -100.4261 }, // Querétaro por defecto
      zoom: 14,
    });

    // Crear un marcador para la ubicación seleccionada
    this.marker = new google.maps.Marker({
      position: { lat: 20.5937, lng: -100.4261 }, // Querétaro por defecto
      map: this.map,
      title: "Ubicación de la propiedad"
    });

    // Escuchar el evento de clic en el mapa para seleccionar la ubicación
    google.maps.event.addListener(this.map, 'click', (event: any) => {
      this.latitude = event.latLng.lat();
      this.longitude = event.latLng.lng();

      this.marker.setPosition(event.latLng); // Mover el marcador a la nueva ubicación
      this.map.setCenter(event.latLng); // Centrar el mapa en la nueva ubicación
    });
  }

  validateForm(): string | null {
    if (this.propertyType.trim() === '') return 'El tipo de propiedad es obligatorio';
    if (this.rooms <= 0) return 'Debes indicar al menos 1 habitación';
    if (this.bathrooms <= 0) return 'Debes indicar al menos 1 baño';
    if (this.parking < 0) return 'El número de estacionamientos no puede ser negativo';
    if (this.additionalSpecs.trim() === '') return 'Las especificaciones adicionales son obligatorias';
    if (!this.documentPreview) return 'Debes subir un documento de identidad';
    if (!this.ineSelected && !this.passportSelected) return 'Debes seleccionar al menos un documento de identidad (INE o Pasaporte)';
    if (this.propertyImages.length === 0) return 'Debes subir al menos una imagen de la propiedad';
    if (!this.price || this.price <= 0) return 'El precio es obligatorio y debe ser mayor a 0';
    if (this.latitude === null || this.longitude === null) return 'Debes seleccionar una ubicación válida';
  
    return null; // Todo bien
  }
  

  onImageSelected(event: any) {
    const files = event.target.files;
    if (files && files.length > 0) {
      for (let file of files) {
        if (file.size > 1 * 1024 * 1024) { // ✅ 1 MB de límite
          this.showAlert('La imagen excede el tamaño máximo de 1 MB.');
          return;
        }

        const reader = new FileReader();
        reader.onload = () => {
          this.propertyImages.push(reader.result as string);
        };
        reader.onerror = () => {
          this.showAlert('Hubo un problema al leer la imagen. Intenta nuevamente.');
        };
        reader.readAsDataURL(file);
      }
    } else {
      this.showAlert('No se seleccionó ninguna imagen.');
    }
  }

  // Maneja la selección del documento de identidad
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 1 * 1024 * 1024) { // ✅ 1 MB de límite
        this.showAlert('El documento de identidad excede el tamaño máximo de 1 MB.');
        return;
      }

      this.selectedDocument = file;
      const reader = new FileReader();
      reader.onload = () => {
        this.documentPreview = reader.result;
      };
      reader.onerror = () => {
        this.showAlert('Hubo un problema al leer el documento. Intenta nuevamente.');
      };
      reader.readAsDataURL(file);
    } else {
      this.showAlert('No se seleccionó ningún documento.');
    }
  }

  async showAlert(message: string) {
    const alert = await this.alert.create({
      header: 'Error',
      message: message,
      buttons: ['Aceptar']
    });
  
    await alert.present();
  }
  

  

  // Publica la propiedad guardando la información en Firestore
  async publish() {
    const errorMessage = this.validateForm();
  
    if (errorMessage) {
      this.showAlert(errorMessage);
      return;
    }
  
    const loading = await this.loadingController.create({
      message: 'Publicando propiedad...',
      spinner: 'bubbles',
      cssClass: 'custom-spinner'
    });
  
    await loading.present();
  
    try {
      const user = await this.afAuth.currentUser;
      if (!user) {
        this.showAlert("No hay usuario autenticado");
        await loading.dismiss();
        return;
      }
  
      const propertyData = {
        ownerId: user.uid,
        tipo: this.propertyType,
        habitaciones: this.rooms,
        banos: this.bathrooms,
        estacionamiento: this.parking,
        especificaciones_adicionales: this.additionalSpecs,
        servicios: {
          agua: this.water,
          luz: this.electricity,
          internet: this.internet,
          gas: this.gas
        },
        identidad: {
          ine: this.ineSelected,
          pasaporte: this.passportSelected
        },
        documento: this.documentPreview,
        imagenes: this.propertyImages,
        precio: this.price,
        latitud: this.latitude,
        longitud: this.longitude,
        createdAt: new Date()
      };
  
      await runInInjectionContext(this.injector, async () => {
        await this.afs.collection('properties').add(propertyData);
      });
  
      console.log('Propiedad publicada:', propertyData);
      this.openModal();
    } catch (error) {
      console.error("Error al publicar la propiedad: ", error);
      this.showAlert('Hubo un problema al guardar la propiedad. Por favor, inténtalo nuevamente.');
    } finally {
      await loading.dismiss();
    }
  }

  openModal() {
    const modal = document.getElementById('confirmationModal')!;
    modal.style.display = 'flex';
  }

  closeModal() {
    const modal = document.getElementById('confirmationModal')!;
    modal.style.display = 'none';
  }
}
