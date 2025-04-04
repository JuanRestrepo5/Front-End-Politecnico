import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; 
//import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component'; // Componente login
import { RegistroComponent } from './registro/registro.component'; //Componente registro

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,// Se agrega el componente nuevo login
    HomeComponent,
    RegistroComponent // se agrega el componente nuevo registro
    
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
