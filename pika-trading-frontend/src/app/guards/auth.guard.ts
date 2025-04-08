// src/app/guards/auth.guard.ts

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' }) // Hace que el guard esté disponible globalmente
export class AuthGuard implements CanActivate {
  // Inyectamos el AuthService para obtener el usuario y el Router para redirigir
  constructor(private authService: AuthService, private router: Router) {}

  // Método que determina si se puede activar la ruta protegida
  canActivate(): boolean {
    const user = this.authService.getUser(); // Obtenemos el usuario actual

    // Verificamos si existe el usuario y si tiene rol 'admin'
    if (user && user.rol === 'admin') {
      return true; // Permitimos el acceso
    } else {
      this.router.navigate(['/login']); // Redirigimos al login si no cumple
      return false; // Bloqueamos el acceso
    }
  }
}
