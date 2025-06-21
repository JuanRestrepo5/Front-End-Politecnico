import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { sobreNosotrosRoutes } from './sobre-nosotros.routes';

@NgModule({
  imports: [
    RouterModule.forChild(sobreNosotrosRoutes)
  ]
})
export class SobreNosotrosModule {}