// Importaciones necesarias de Angular y otros módulos
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; 
// import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component'; // Componente login
import { CartasComponent } from './pages/cartas/cartas.component'; // Componente cartas
import { FormsModule } from '@angular/forms'; // Importar FormsModule para usar formularios en Angular
import { NgChartsModule } from 'ng2-charts'; // Importar ChartsModule para usar gráficos de ng2-charts
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,                          // Se agrega el componente nuevo login
    HomeComponent,
    CartasComponent,
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
export class AppModule {

  // Constructor para verificar si se está ejecutando en el navegador
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

}
