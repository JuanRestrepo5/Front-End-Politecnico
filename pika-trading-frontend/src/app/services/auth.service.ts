// src/app/services/auth.service.ts
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private storageKey = 'usuario';
  private usuarioSubject = new BehaviorSubject<any>(null);
  public usuario$ = this.usuarioSubject.asObservable();
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { 
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      const usuarioGuardado = localStorage.getItem(this.storageKey);
      if (usuarioGuardado) {
        this.usuarioSubject.next(JSON.parse(usuarioGuardado));
      }
    }
   }

   private getUserFromStorage() {
    if (!this.isBrowser) return null; // ← esto es importante
  
    const user = localStorage.getItem(this.storageKey);
    return user ? JSON.parse(user) : null;
  }
  

  // Obtener el usuario desde localStorage
  getUser() {
    return this.usuarioSubject.value;
  }

  // Guardar usuario en sesión
  setUser(user: any) {
    if (this.isBrowser) {
      localStorage.setItem(this.storageKey, JSON.stringify(user));
      this.usuarioSubject.next(user);
    }
  }

  // Verificar si hay sesión activa
  isLoggedIn(): boolean {
    return !!this.getUser();
  }

  // Verificar si es admin
  isAdmin(): boolean {
    const user = this.getUser();
    return user && user.rol === 'admin';
  }

  // Cerrar sesión
  logout() {
    if (this.isBrowser) {
      localStorage.removeItem(this.storageKey);
    }
    this.usuarioSubject.next(null);
  }
}
