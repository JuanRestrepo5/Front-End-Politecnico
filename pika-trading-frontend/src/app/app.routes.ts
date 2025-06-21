// Importación de módulos y componentes necesarios para definir las rutas
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { CartasComponent } from './pages/cartas/cartas.component';
import { AuthGuard } from './guards/auth.guard';

// Definición de rutas principales de la aplicación
export const routes: Routes = [ 
  {
    path: '',
    component: HomeLayoutComponent,  // Layout general que contiene las vistas hijas
    children: [
      {
        path: 'admin',
        loadChildren: () =>
          import('./admin/admin.module').then(m => m.AdminModule),
        canActivate: [AuthGuard]
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' },                            // Redirección a /home por defecto
      { path: 'home', component: HomeComponent },                                     // Vista principal
      { path: 'login', component: LoginComponent },                                   // Vista de login
      {
        path: 'registro',
        loadChildren: () =>
          import('./registro/registro.module').then(m => m.RegistroModule)
      },                             // Vista de registro
      {
        path: 'recuperar-contrasena',
        loadChildren: () =>
          import('./recuperar-contrasena/recuperar-contrasena.module').then(m => m.RecuperarContrasenaModule)
      },     // Recuperar contraseña
      {
        path: 'sobre-nosotros',
        loadChildren: () =>
          import('./sobre-nosotros/sobre-nosotros.module').then(m => m.SobreNosotrosModule)
      },                  // Página sobre nosotros
      { path: 'cartas', component: CartasComponent },                                 // Página de cartas
      {
        path: 'carrito',
        loadChildren: () =>
          import('./cart/cart.module').then(m => m.cartModule)
      },                                  // Carrito de compras
      {
        path: 'perfil-usuario',
        loadChildren: () =>
          import('./perfil-usuario/perfil-usuario.module').then(m => m.PerfilUsuarioModule)
      }
    ]
  },
  {
    path: '',
    component: HomeComponent
  }
];
