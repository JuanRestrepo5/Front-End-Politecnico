import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  //imports: [RouterOutlet]  // <-- Aquí está el problema si no tienes rutas
})
export class AppComponent {
  title = 'pika-trading-frontend';
}
