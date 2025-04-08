// Importación del decorador Component desde Angular core
import { Component } from '@angular/core';

// Decorador que define el componente Angular
@Component({
  // Nombre del selector para usar este componente en HTML
  selector: 'app-recuperar-contrasena',

  // Módulos que este componente importa (vacío en este caso)
  imports: [],

  // Ruta del archivo de la plantilla HTML
  templateUrl: './recuperar-contrasena.component.html',

  // Ruta del archivo de estilos SCSS
  styleUrl: './recuperar-contrasena.component.scss'
})
export class RecuperarContrasenaComponent {
  // Componente vacío por ahora, puede contener lógica más adelante
}
