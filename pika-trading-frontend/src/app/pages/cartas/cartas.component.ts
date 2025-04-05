import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cartas',
  imports: [CommonModule],
  templateUrl: './cartas.component.html',
  styleUrl: './cartas.component.scss'
})
export class CartasComponent {
  cartas = [
    { nombre: 'Charizard', precio: 2500, imagen: '/assets/cartas/charizard.jpg',cantidad: 1 },
    { nombre: 'Dragapult', precio: 2100, imagen: '/assets/cartas/dragapult.jpg',cantidad: 1 },
    { nombre: 'Flareon EX', precio: 2300, imagen: '/assets/cartas/flareon.jpg',cantidad: 1 },
    { nombre: 'Friends in Paldea', precio: 2300, imagen: '/assets/cartas/Friends_in_paldea.jpg',cantidad: 1 },
    { nombre: 'Hydrapple EX', precio: 2300, imagen: '/assets/cartas/Hydrapple-ex.jpg',cantidad: 1 },
    { nombre: 'Lacey', precio: 2300, imagen: '/assets/cartas/Lacey.jpg',cantidad: 1 },
    { nombre: 'Leafeon', precio: 2300, imagen: '/assets/cartas/Leafeon.jpg',cantidad: 1 },
    { nombre: 'Lillies Clefairy EX', precio: 2300, imagen: '/assets/cartas/Lillies-Clefairy-ex.jpg',cantidad: 1 },
  ];

  
  aumentarCantidad(carta: any) {
    carta.cantidad = (carta.cantidad || 1) + 1;
  }

  disminuirCantidad(carta: any) {
    if (carta.cantidad && carta.cantidad > 1) {
      carta.cantidad--;
    }
  }

  agregarAlCarrito(carta: any) {
    console.log(`Agregaste ${carta.cantidad || 1} unidades de ${carta.nombre} al carrito`);
  }
}
