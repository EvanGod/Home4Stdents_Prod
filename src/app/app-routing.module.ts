import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./pages/splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'property-upload',
    loadChildren: () => import('./pages/property-upload/property-upload.module').then( m => m.PropertyUploadPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'detalle',
    loadChildren: () => import('./pages/detalle/detalle.module').then( m => m.DetallePageModule)
  },
  {
    path: 'solicitarvisita',
    loadChildren: () => import('./pages/solicitarvisita/solicitarvisita.module').then( m => m.SolicitarvisitaPageModule)
  },
  {
    path: 'contrato',
    loadChildren: () => import('./pages/contrato/contrato.module').then( m => m.ContratoPageModule)
  },
  {
    path: 'validar-identidad',
    loadChildren: () => import('./pages/validar-identidad/validar-identidad.module').then( m => m.ValidarIdentidadPageModule)
  },
  {
    path: 'metododepago',
    loadChildren: () => import('./pages/metododepago/metododepago.module').then( m => m.MetododepagoPageModule)
  },
  {
    path: 'home-propietario',
    loadChildren: () => import('./pages/home-propietario/home-propietario.module').then( m => m.HomePropietarioPageModule)
  },
  {
    path: 'ver-citas-pro',
    loadChildren: () => import('./pages/ver-citas-pro/ver-citas-pro.module').then( m => m.VerCitasProPageModule)
  },
  {
    path: 'citas-propietario',
    loadChildren: () => import('./pages/citas-propietario/citas-propietario.module').then( m => m.CitasPropietarioPageModule)
  },
  {
    path: 'mis-citas',
    loadChildren: () => import('./pages/mis-citas/mis-citas.module').then( m => m.MisCitasPageModule)
  },

  {
    path: 'offline',
    loadChildren: () => import('./pages/offline/offline.module').then( m => m.OfflinePageModule)
  }
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
