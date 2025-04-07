import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; 
//import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component'; // Componente login
import { RegistroComponent } from './registro/registro.component'; //Componente registro
import { RecuperarContrasenaComponent } from './recuperar-contrasena/recuperar-contrasena.component'; // Componente recuperar contraseña
//import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component'; // Componente sobre nosotros
import { CartasComponent } from './pages/cartas/cartas.component'; // Componente cartas
import { FormsModule } from '@angular/forms'; // Importar FormsModule para usar formularios en Angular
import { UsuariosAdminComponent } from './admin/usuarios-admin/usuarios-admin.component';
import { NgChartsModule } from 'ng2-charts'; // Importar ChartsModule para usar gráficos de ng2-charts

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,// Se agrega el componente nuevo login
    HomeComponent,
    RegistroComponent, // se agrega el componente nuevo registro
    RecuperarContrasenaComponent, //Se agrega el componente nuevo recuperar contraseña
    CartasComponent,
    UsuariosAdminComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
