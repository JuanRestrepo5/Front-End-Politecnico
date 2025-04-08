import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from './cart.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  carrito: any[] = [];         // Lista de productos en el carrito
  total: number = 0;           // Total del carrito

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.carrito = this.cartService.getCart();
    this.calcularTotal();

    // Escucha cambios en el carrito desde el servicio
    this.cartService.cart$.subscribe((nuevoCarrito) => {
      this.carrito = nuevoCarrito;
      this.calcularTotal();
    });
  }

  // Recarga el carrito desde el servicio
  cargarCarrito() {
    this.carrito = this.cartService.getCart();
    this.calcularTotal();
  }

  // Calcula el total del carrito sumando precios * cantidad
  calcularTotal() {
    this.total = this.carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  }

  // Elimina un item por nombre
  eliminarItem(nombre: string) {
    this.cartService.removeFromCart(nombre);
    this.cargarCarrito();
  }

  // Vacía completamente el carrito (con confirmación)
  vaciarCarrito() {
    if (confirm('¿Estás seguro de que querés vaciar el carrito?')) {
      this.cartService.clearCart();
      this.cargarCarrito();
    }  
  }

  // Se llama cuando cambia la cantidad de un item
  actualizarCantidad(item: any) {
    if (item.cantidad >= 1) {
      this.calcularTotal();
      this.guardarCarrito();
    }
  }

  // Guarda el carrito actualizado en el servicio
  guardarCarrito() {
    this.cartService.setCart(this.carrito);
  }  

  // Incrementa la cantidad de un item
  aumentarCantidad(item: any) {
    item.cantidad++;
    this.actualizarCantidad(item);
  }

  // Disminuye la cantidad o elimina si llega a 0
  disminuirCantidad(item: any) {
    if (item.cantidad > 1) {
      item.cantidad--;
    } else {
      this.eliminarDelCarrito(item); // elimina si la cantidad baja de 1
    }
    this.actualizarCantidad(item);
  }

  // Elimina un item del array directamente
  eliminarDelCarrito(item: any) {
    const index = this.carrito.indexOf(item);
    if (index !== -1) {
      this.carrito.splice(index, 1);
      this.calcularTotal();
      this.guardarCarrito();
    }
  }
}
