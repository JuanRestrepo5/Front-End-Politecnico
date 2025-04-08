// Importación de módulos y componentes necesarios para definir las rutas
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { RegistroComponent } from './registro/registro.component';
import { RecuperarContrasenaComponent } from './recuperar-contrasena/recuperar-contrasena.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { CartasComponent } from './pages/cartas/cartas.component';
import { AuthGuard } from './guards/auth.guard';
import { UsuariosAdminComponent } from './admin/usuarios-admin/usuarios-admin.component';
import { CartComponent } from './cart/cart.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { EstadisticasComponent } from './admin/estadisticas/estadisticas.component';

// Definición de rutas principales de la aplicación
export const routes: Routes = [ 
  {
    path: '',
    component: HomeLayoutComponent,  // Layout general que contiene las vistas hijas
    children: [
      { path: 'admin', component: UsuariosAdminComponent, canActivate: [AuthGuard] }, // Ruta protegida por AuthGuard
      { path: '', redirectTo: 'home', pathMatch: 'full' },                            // Redirección a /home por defecto
      { path: 'home', component: HomeComponent },                                     // Vista principal
      { path: 'login', component: LoginComponent },                                   // Vista de login
      { path: 'registro', component: RegistroComponent },                             // Vista de registro
      { path: 'recuperar-contrasena', component: RecuperarContrasenaComponent },      // Recuperar contraseña
      { path: 'sobre-nosotros', component: SobreNosotrosComponent },                  // Página sobre nosotros
      { path: 'cartas', component: CartasComponent },                                 // Página de cartas
      { path: 'carrito', component: CartComponent },                                  // Carrito de compras
      { path: 'perfil-usuario', component: PerfilUsuarioComponent },                  // Perfil del usuario
      { path: 'admin/estadisticas', component: EstadisticasComponent }               // Estadísticas del administrador
    ]
  },
];
