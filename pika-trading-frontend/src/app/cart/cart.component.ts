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
  carrito: any[] = [];
  total: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.carrito = this.cartService.getCart();
    this.calcularTotal();

    // Suscribirse por si hay cambios en el carrito
    this.cartService.cart$.subscribe((nuevoCarrito) => {
      this.carrito = nuevoCarrito;
      this.calcularTotal();
    });
  }
  cargarCarrito() {
    this.carrito = this.cartService.getCart();
    this.calcularTotal();
  }

  calcularTotal() {
    this.total = this.carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  }

  eliminarItem(nombre: string) {
    this.cartService.removeFromCart(nombre);
    this.cargarCarrito();
  }

  vaciarCarrito() {
    if (confirm('¿Estás seguro de que querés vaciar el carrito?')) {
      this.cartService.clearCart();
      this.cargarCarrito();
    }  
  }

  actualizarCantidad(item: any) {
    if (item.cantidad >= 1) {
      this.calcularTotal();
      this.guardarCarrito();
    }
  }
  
  guardarCarrito() {
    this.cartService.setCart(this.carrito);
  }  

  aumentarCantidad(item: any) {
    item.cantidad++;
    this.actualizarCantidad(item);
  }
  
  disminuirCantidad(item: any) {
    if (item.cantidad > 1) {
      item.cantidad--;
    } else {
      this.eliminarDelCarrito(item); // opcional: elimina si llega a 0
    }
    this.actualizarCantidad(item);
  }

  eliminarDelCarrito(item: any) {
    const index = this.carrito.indexOf(item);
    if (index !== -1) {
      this.carrito.splice(index, 1);
      this.calcularTotal(); // Para recalcular el total después de eliminar
      this.guardarCarrito();  // Si estás usando localStorage o similar
    }
  }
  
  

}  
