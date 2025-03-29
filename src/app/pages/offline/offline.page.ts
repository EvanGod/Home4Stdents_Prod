import { Component } from '@angular/core';
import { NetworkService } from '../../../services/network.service'; 
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-offline',
  templateUrl: './offline.page.html',
  styleUrls: ['./offline.page.scss'],
  standalone: false
})
export class OfflinePage {
  constructor(private networkService: NetworkService, private router: Router) { }

  tryReload() {
    this.networkService.isOnline$.subscribe(online => {
      if (online) {
        const storedUserData = localStorage.getItem('userData');
        if (storedUserData) {
          const userData = JSON.parse(storedUserData);
          if (userData && userData.userType) {
            if (userData.userType === 'propietario') {
              this.router.navigate(['/home-propietario']);
            } else if (userData.userType === 'quiero-rentar') {
              this.router.navigate(['/search']);
            }
          }
        } else {
          this.router.navigate(['/login']);
        }
      } else {
        console.log('No hay conexión a Internet');
      }
    });
  }
}
