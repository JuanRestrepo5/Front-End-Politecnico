import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { RegistroComponent } from './registro/registro.component';

<<<<<<< HEAD
export const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'login', component: LoginComponent }, // <-- mover aquí el login
    ]
  }
=======

export const routes: Routes = [ 
    {path: '',
        component: HomeLayoutComponent,
        children: [
          { path: '', redirectTo: 'home', pathMatch: 'full' },
          { path: 'home', component: HomeComponent },
          { path: 'login', component: LoginComponent },
          {path: 'registro', component: RegistroComponent}
        ] },
>>>>>>> 616e1279 (Se agrega la vista de registro de usuario con su respectiva navegacion)
];


