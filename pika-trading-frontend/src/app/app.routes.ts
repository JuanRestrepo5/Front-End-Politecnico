import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { RegistroComponent } from './registro/registro.component';
import { RecuperarContrasenaComponent } from './recuperar-contrasena/recuperar-contrasena.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { CartasComponent } from './pages/cartas/cartas.component';


export const routes: Routes = [ 
    {path: '',
        component: HomeLayoutComponent,
        children: [
          { path: '', redirectTo: 'home', pathMatch: 'full' },
          { path: 'home', component: HomeComponent },
          { path: 'login', component: LoginComponent },
          { path: 'registro', component: RegistroComponent},
          { path: 'recuperar-contrasena', component: RecuperarContrasenaComponent},
          { path: 'sobre-nosotros', component: SobreNosotrosComponent},
          { path: 'cartas', component: CartasComponent }
        ] },
];


