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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,// Se agrega el componente nuevo login
    HomeComponent,
    RegistroComponent, // se agrega el componente nuevo registro
    RecuperarContrasenaComponent, //Se agrega el componente nuevo recuperar contraseña
    CartasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
