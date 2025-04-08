import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root' // Hace que el servicio esté disponible en toda la app
})
export class CartService {
  // Arreglo que representa el carrito actual
  private cart: any[] = [];

  // Subject para emitir los cambios del carrito a los suscriptores
  private cartSubject = new BehaviorSubject<any[]>([]);
  cart$ = this.cartSubject.asObservable(); // Observable público para suscribirse

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // Solo accede a localStorage si está corriendo en el navegador
    if (isPlatformBrowser(this.platformId)) {
      const storedCart = localStorage.getItem('carrito');
      if (storedCart) {
        // Si hay carrito guardado, lo carga y emite su valor
        this.cart = JSON.parse(storedCart);
        this.cartSubject.next(this.cart);
      }
    }
  }

  // Actualiza localStorage y emite el estado actualizado del carrito
  private actualizarEstado() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('carrito', JSON.stringify(this.cart));
    }
    this.cartSubject.next(this.cart);
  }

  // Devuelve el carrito actual
  getCart() {
    return this.cart;
  }

  // Agrega un ítem al carrito o actualiza la cantidad si ya existe
  addToCart(card: any, quantity: number = 1) {
    const existing = this.cart.find(item => item.nombre === card.nombre);
    if (existing) {
      existing.cantidad += quantity;
    } else {
      this.cart.push({ ...card, cantidad: quantity });
    }
    this.actualizarEstado();
  }

  // Elimina un ítem del carrito según su nombre
  removeFromCart(nombre: string) {
    this.cart = this.cart.filter(item => item.nombre !== nombre);
    this.actualizarEstado();
  }

  // Vacía completamente el carrito
  clearCart() {
    this.cart = [];
    this.actualizarEstado();
  }

  // Reemplaza el carrito actual por uno nuevo y lo guarda en localStorage
  setCart(carrito: any[]) {
    this.cart = carrito;
    localStorage.setItem('carrito', JSON.stringify(this.cart));
    this.cartSubject.next(this.cart);
  }
}
