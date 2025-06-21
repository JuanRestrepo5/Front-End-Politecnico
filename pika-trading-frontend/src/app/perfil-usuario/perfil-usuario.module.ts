import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { perfilUsuarioRoutes } from './perfil-usuario.routes';

@NgModule({
  imports: [
    RouterModule.forChild(perfilUsuarioRoutes)
  ]
})
export class PerfilUsuarioModule {}