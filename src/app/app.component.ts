import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NetworkService } from '../services/network.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false
})
export class AppComponent implements OnInit {
  // Lista de rutas que se pueden mostrar offline sin redirigir a /offline
  allowedOfflineRoutes = ['/search', '/mis-citas', '/home-propietario', '/ver-citas-pro'];

  constructor(private networkService: NetworkService, private router: Router) {}

  ngOnInit() {
    this.networkService.isOnline$.subscribe(online => {
      if (!online) {
        // Obtener la ruta actual
        const currentRoute = this.router.url;
        // Si la ruta actual NO es de las permitidas para funcionar offline,
        // redirige a la página offline.
        if (!this.allowedOfflineRoutes.some(route => currentRoute.startsWith(route))) {
          this.router.navigate(['/offline']);
        }
      }
    });
  }
}
