import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterModule]  // <-- Aquí está el problema si no tienes rutas
})
export class AppComponent {
  title = 'pika-trading-frontend';
}
