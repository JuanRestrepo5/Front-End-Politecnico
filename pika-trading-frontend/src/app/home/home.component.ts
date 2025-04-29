import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home', // Selector que se usará en HTML para incluir este componente
  templateUrl: './home.component.html', // Ruta del archivo HTML de la vista
  styleUrls: ['./home.component.scss'], // Ruta del archivo de estilos SCSS
  imports: [CommonModule, HttpClientModule] // Módulos necesarios para el componente
})
export class HomeComponent implements OnInit {
  products: any[] = []; // Arreglo para almacenar los productos obtenidos

  constructor(private http: HttpClient) {} // Inyectamos el servicio HttpClient

  ngOnInit() {
    // Al inicializar el componente, se hace una solicitud GET a la API
    this.http.get<any[]>('/api/products')
      .subscribe(data => this.products = data); // Al recibir los datos, se asignan al arreglo
  }
}
