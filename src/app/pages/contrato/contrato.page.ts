import { Component, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { NavController } from '@ionic/angular';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-contrato',
  templateUrl: './contrato.page.html',
  styleUrls: ['./contrato.page.scss'],
  standalone: false
})
export class ContratoPage implements AfterViewInit {
  ngAfterViewInit(): void {
    // Logic to execute after the view has been initialized
    console.log('View has been initialized');
  }
  @ViewChild('signaturePad', { static: false }) signaturePad!: ElementRef<HTMLCanvasElement>;
  @ViewChild('contractContent', { static: false }) contractContent!: ElementRef;  
  private canvasContext!: CanvasRenderingContext2D;
  private drawing = false;
  firmaRealizada = false;

  // Objeto contrato que se llenará mediante los inputs
  contract = {
    fecha: new Date().toISOString(), // fecha actual
    arrendador: 'Juan Pérez',
    arrendatario: 'María López',
    direccion: 'Av. Siempre Viva 123, Querétaro, Qro.',
    uso: '',
    duracion: '',
    fechaInicio: '',
    fechaTerminacion: '',
    montoRenta: '',
    cantidadLetras: '',
    diasPago: '',
    metodoPago: '',
    deposito: '',
    numeroMeses: '',
    acepta: false
  };

  constructor(private navCtrl: NavController, private renderer: Renderer2) {}



  

  downloadPDF() {
    const data = document.getElementById('contractContent');
    if (!data) return;
  
    html2canvas(data, { scale: 2, useCORS: true, backgroundColor: '#fff' })
      .then(canvas => {
        // Dimensiones de un A4 en mm
        const pdfWidth = 210; // ancho A4 en mm
        const pdfHeight = 297; // alto A4 en mm
  
        // Calcula las dimensiones de la imagen manteniendo la relación de aspecto
        const imgWidth = pdfWidth;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
  
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
  
        let position = 0;
        let heightLeft = imgHeight;
  
        // Agrega la primera página
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pdfHeight;
  
        // Mientras quede contenido por agregar, crea nuevas páginas
        while (heightLeft > 0) {
          position = heightLeft - imgHeight; // posición negativa para recortar la parte superior ya usada
          pdf.addPage();
          pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pdfHeight;
        }
        
        pdf.save('contrato.pdf');
      })
      .catch(error => {
        console.error('Error al generar el PDF:', error);
      });
  }
  
  
  
  
  
}
