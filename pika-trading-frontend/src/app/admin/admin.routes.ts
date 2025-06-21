import { Routes } from '@angular/router';
import { UsuariosAdminComponent } from './usuarios-admin/usuarios-admin.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';

export const adminRoutes: Routes = [
  { path: '', component: UsuariosAdminComponent },
  { path: 'estadisticas', component: EstadisticasComponent }
];