import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-validar-identidad',
  templateUrl: './validar-identidad.page.html',
  styleUrls: ['./validar-identidad.page.scss'],
  standalone: false
})
export class ValidarIdentidadPage {
  documentoSeleccionado: string = '';
  ineFrontal: string | null = null;
  ineReverso: string | null = null;
  pasaporte: string | null = null;

  constructor(private navCtrl: NavController) {}

  async tomarFoto(tipo: 'frontal' | 'reverso' | 'pasaporte') {
    try {
      const imagen = await Camera.getPhoto({
        quality: 90,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera,
      });

      if (tipo === 'frontal') {
        this.ineFrontal = imagen.dataUrl!;
      } else if (tipo === 'reverso') {
        this.ineReverso = imagen.dataUrl!;
      } else if (tipo === 'pasaporte') {
        this.pasaporte = imagen.dataUrl!;
      }
    } catch (error) {
      console.error('Error al tomar la foto:', error);
    }
  }

  cargarImagen(event: any, tipo: 'frontal' | 'reverso' | 'pasaporte') {
    const archivo = event.target.files[0];
    if (archivo) {
      const lector = new FileReader();
      lector.onload = () => {
        if (tipo === 'frontal') {
          this.ineFrontal = lector.result as string;
        } else if (tipo === 'reverso') {
          this.ineReverso = lector.result as string;
        } else if (tipo === 'pasaporte') {
          this.pasaporte = lector.result as string;
        }
      };
      lector.readAsDataURL(archivo);
    }
  }

  siguiente() {
    this.navCtrl.navigateForward('/metododepago');
  }
}
