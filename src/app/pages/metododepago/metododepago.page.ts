import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { jsPDF } from "jspdf";


@Component({
  selector: 'app-metododepago',
  templateUrl: './metododepago.page.html',
  styleUrls: ['./metododepago.page.scss'],
  standalone: false
})
export class MetododepagoPage {

  metodoPago: string = '';
  mostrarNotificacion = false;

  constructor(private toastController: ToastController, private navCtrl: NavController) {}

  pagar() {
    if (!this.metodoPago) {
      alert("Por favor, selecciona un método de pago.");
      return;
    }

    if (this.metodoPago === 'paypal') {
      window.open('https://www.paypal.com/', '_blank');
    } else if (this.metodoPago === 'recibo') {
      this.generarRecibo();
    } else {
      this.mostrarNotificacion = true;
    }

    setTimeout(() => {
      this.mostrarNotificacion = false;
      this.redirigir(); 
    }, 2000);
  }

  generarRecibo() {
    const doc = new jsPDF();
    doc.text("Recibo de Pago", 20, 20);
    doc.text("Monto: $5000 MXN", 20, 40);
    doc.text("Fecha: " + new Date().toLocaleDateString(), 20, 60);
    doc.save("recibo_pago.pdf");
    this.mostrarNotificacion = true;
  }

  redirigir() {
    this.navCtrl.navigateForward('/search');
  }
}
