import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { cartRoutes } from './cart.routes';

@NgModule({
  imports: [
    RouterModule.forChild(cartRoutes)
  ]
})
export class cartModule {}