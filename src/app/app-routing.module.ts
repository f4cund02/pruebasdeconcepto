import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  {path: 'mapa/:geo', loadChildren: './pages/mapa/mapa.module#MapaPageModule'},
  { path: 'notificaciones', loadChildren: './pages/notificaciones/notificaciones.module#NotificacionesPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
