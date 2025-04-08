// Importaciones necesarias de Angular y RxJS
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

// Decorador que indica que este servicio está disponible en toda la app
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private storageKey = 'usuario'; // Clave para localStorage
  private usuarioSubject = new BehaviorSubject<any>(null); // Sujeto que mantiene el estado del usuario
  public usuario$ = this.usuarioSubject.asObservable(); // Observable para otros componentes
  private isBrowser: boolean; // Verifica si el código se ejecuta en el navegador

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { 
    // Comprueba si estamos en el entorno del navegador
    this.isBrowser = isPlatformBrowser(this.platformId);

    // Si es navegador, intenta obtener el usuario del localStorage
    if (this.isBrowser) {
      const usuarioGuardado = localStorage.getItem(this.storageKey);
      if (usuarioGuardado) {
        this.usuarioSubject.next(JSON.parse(usuarioGuardado));
      }
    }
  }

  // Método privado para obtener usuario del localStorage (solo en navegador)
  private getUserFromStorage() {
    if (!this.isBrowser) return null; // ← esto es importante

    const user = localStorage.getItem(this.storageKey);
    return user ? JSON.parse(user) : null;
  }

  // Obtener el usuario actual (desde el BehaviorSubject)
  getUser() {
    return this.usuarioSubject.value;
  }

  // Guardar usuario en localStorage y actualizar el sujeto
  setUser(user: any) {
    if (this.isBrowser) {
      localStorage.setItem(this.storageKey, JSON.stringify(user));
      this.usuarioSubject.next(user);
    }
  }

  // Verificar si el usuario está logueado
  isLoggedIn(): boolean {
    return !!this.getUser(); // Retorna true si hay un usuario, false si no
  }

  // Verificar si el usuario es administrador
  isAdmin(): boolean {
    const user = this.getUser();
    return user && user.rol === 'admin';
  }

  // Cerrar sesión: limpiar storage y resetear el sujeto
  logout() {
    if (this.isBrowser) {
      localStorage.removeItem(this.storageKey);
    }
    this.usuarioSubject.next(null);
  }
}
