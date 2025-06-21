import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { recuperarContrasenaRoutes } from './recuperar-contrasena.routes';

@NgModule({
  imports: [
    RouterModule.forChild(recuperarContrasenaRoutes)
  ]
})
export class RecuperarContrasenaModule {}