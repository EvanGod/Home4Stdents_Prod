import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, NavController, LoadingController, AlertController } from '@ionic/angular';
import { AuthService } from '../../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,  
  imports: [CommonModule, IonicModule, FormsModule] 
})
export class LoginPage {
  user: string = ''; 
  password: string = '';
  isFormValid: boolean = false;
  isRedirecting: boolean = true;

  constructor(private navCtrl: NavController, private authService: AuthService, private loadingController: LoadingController, private alertController: AlertController) {}


  ngOnInit() {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      if (userData && userData.userType) {
        if (userData.userType === 'propietario') {
          this.navCtrl.navigateForward('/home-propietario');
        } 
        else if (userData.userType === 'quiero-rentar') {
          this.navCtrl.navigateForward('/search');
        }
      }
    }else {
      this.isRedirecting = false; 
    }
  }

  validateForm() {
    this.isFormValid = 
      this.user.trim() !== '' &&
      this.password.trim() !== '';
  }

  async showErrorAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: message,
      buttons: ['Aceptar']
    });
    await alert.present();
  }

  async login() {
    if (!this.isFormValid) {
      this.showErrorAlert('Por favor, completa todos los campos correctamente.');
      return; 
    }
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(this.user)) {
      this.showErrorAlert('El formato del correo no es válido.');
      return;
    }

    const loading = await this.loadingController.create({
      message: 'Iniciando sesión...',
      spinner: 'bubbles', 
      cssClass: 'custom-spinner' 
    });
    

    await loading.present();
  
    try {
      const userCredential = await this.authService.login(this.user.trim(), this.password);
      if (userCredential) {
        console.log('Usuario autenticado:', userCredential);
  
        const userData = await this.authService.getUserData(userCredential.uid);
        if (userData && userData['userType']) {
          console.log('Tipo de usuario:', userData['userType']);

          const userDataToStore = {
            userType: userData['userType'],
            email: this.user.trim()
          };
  
          localStorage.setItem('userData', JSON.stringify(userDataToStore));
  
          if (userData['userType'] === 'propietario') {
            this.navCtrl.navigateForward('/home-propietario');
          } else if (userData['userType'] === 'quiero-rentar') {
            this.navCtrl.navigateForward('/search'); 
          } else {
            this.showErrorAlert('Rol de usuario no válido.');
          }
        } else {
          this.showErrorAlert('No se encontraron datos del usuario.');
        }
      }
    } catch (error) {
      this.showErrorAlert('Email y/o password incorrectos');
    }finally {
      await loading.dismiss(); 
    }
  }
  
  navigateToRegister() {
    this.navCtrl.navigateForward('/register');
  }
  
}
