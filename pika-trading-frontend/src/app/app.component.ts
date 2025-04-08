// Importa el decorador Component y el RouterModule para las rutas
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

// Decorador que define el componente principal de la aplicación
@Component({
  selector: 'app-root', // Selector usado en el HTML principal
  templateUrl: './app.component.html', // Ruta a la plantilla HTML
  styleUrls: ['./app.component.scss'], // Ruta a los estilos del componente
  imports: [RouterModule]  // <-- Aquí está el problema si no tienes rutas
})
export class AppComponent {
  title = 'pika-trading-frontend'; // Título de la aplicación
}
