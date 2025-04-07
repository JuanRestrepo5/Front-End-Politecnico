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
  usuarioLogueado: any = null;
  rol: string = ''; // <-- se agrega
  isCartas: boolean = false;
  totalItems: number = 0;


  constructor(
    private router: Router,
    private authService: AuthService,
    private cartService: CartService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    // Se actualiza cuando cambia el usuario
    this.authService.usuario$.subscribe((usuario) => {
      this.usuarioLogueado = usuario;
      this.rol = usuario?.rol ?? ''; //<-- se agrega
    });

    //tipo de usuario
    if (isPlatformBrowser(this.platformId)) {
      const rolGuardado = localStorage.getItem('rol');
      if (rolGuardado && !this.rol) {
        this.rol = rolGuardado;
      }
    }

    // Detectar si estamos en la vista de cartas
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isCartas = event.urlAfterRedirects.includes('/cartas');
      }
    });

    this.cartService.cart$.subscribe((carrito) => {
      this.totalItems = carrito.reduce((sum, item) => sum + item.cantidad, 0);
    });
    

    
  }
  

  cerrarSesion(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
