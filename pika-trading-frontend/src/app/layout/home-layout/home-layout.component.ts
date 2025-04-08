// Importaciones necesarias
import { Component, PLATFORM_ID, Inject } from '@angular/core';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { CartService } from '../../cart/cart.service';

@Component({
  standalone: true,
  selector: 'app-home-layout',
  imports: [RouterModule, CommonModule],
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss'],
})
export class HomeLayoutComponent {
  // Variables públicas del componente
  usuarioLogueado: any = null;
  rol: string = ''; // Rol del usuario
  isCartas: boolean = false; // Bandera para saber si estamos en la vista "cartas"
  totalItems: number = 0; // Total de ítems en el carrito

  constructor(
    private router: Router,
    private authService: AuthService,
    private cartService: CartService,
    @Inject(PLATFORM_ID) private platformId: Object // Inyección para verificar si estamos en el navegador
  ) {
    // Escucha los cambios del usuario autenticado
    this.authService.usuario$.subscribe((usuario) => {
      this.usuarioLogueado = usuario;
      this.rol = usuario?.rol ?? ''; // Si no hay rol, se asigna string vacío
    });

    // Si estamos en el navegador, recuperamos el rol desde el localStorage si no lo tenemos ya
    if (isPlatformBrowser(this.platformId)) {
      const rolGuardado = localStorage.getItem('rol');
      if (rolGuardado && !this.rol) {
        this.rol = rolGuardado;
      }
    }

    // Detecta si la URL actual corresponde a la vista de "cartas"
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isCartas = event.urlAfterRedirects.includes('/cartas');
      }
    });

    // Escucha cambios en el carrito y actualiza el total de ítems
    this.cartService.cart$.subscribe((carrito) => {
      this.totalItems = carrito.reduce((sum, item) => sum + item.cantidad, 0);
    });
  }

  // Cierra sesión y redirige al inicio
  cerrarSesion(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
