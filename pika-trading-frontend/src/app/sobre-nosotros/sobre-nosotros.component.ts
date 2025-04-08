// Importa el decorador Component desde el núcleo de Angular
import { Component } from '@angular/core';

// Define el componente con su metadata
@Component({
  // Nombre del selector HTML para usar este componente en otras plantillas
  selector: 'app-sobre-nosotros',

  // Lista de módulos que este componente standalone podría necesitar (vacío por ahora)
  imports: [],

  // Ruta al archivo HTML que define la vista del componente
  templateUrl: './sobre-nosotros.component.html',

  // Ruta al archivo de estilos SCSS del componente
  styleUrl: './sobre-nosotros.component.scss'
})

// Clase del componente "Sobre Nosotros"
export class SobreNosotrosComponent {

}
