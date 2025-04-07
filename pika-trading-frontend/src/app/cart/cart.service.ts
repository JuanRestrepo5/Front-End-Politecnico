import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: any[] = [];

  private cartSubject = new BehaviorSubject<any[]>([]);
  cart$ = this.cartSubject.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      const storedCart = localStorage.getItem('carrito');
      if (storedCart) {
        this.cart = JSON.parse(storedCart);
        this.cartSubject.next(this.cart);
      }
    }
  }

  private actualizarEstado() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('carrito', JSON.stringify(this.cart));
    }
    this.cartSubject.next(this.cart);
  }

  getCart() {
    return this.cart;
  }

  addToCart(card: any, quantity: number = 1) {
    const existing = this.cart.find(item => item.nombre === card.nombre);
    if (existing) {
      existing.cantidad += quantity;
    } else {
      this.cart.push({ ...card, cantidad: quantity });
    }
    this.actualizarEstado();
  }

  removeFromCart(nombre: string) {
    this.cart = this.cart.filter(item => item.nombre !== nombre);
    this.actualizarEstado();
  }

  clearCart() {
    this.cart = [];
    this.actualizarEstado();
  }

  setCart(carrito: any[]) {
    this.cart = carrito;
    localStorage.setItem('carrito', JSON.stringify(this.cart));
    this.cartSubject.next(this.cart);
  }
  
  
}
