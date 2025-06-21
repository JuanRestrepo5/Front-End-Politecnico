import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { registroRoutes } from './registro.routes';

@NgModule({
  imports: [
    RouterModule.forChild(registroRoutes)
  ]
})
export class RegistroModule {}