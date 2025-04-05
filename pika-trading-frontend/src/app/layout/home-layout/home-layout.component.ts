import { Component, PLATFORM_ID, Inject } from '@angular/core';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  standalone: true,
  selector: 'app-home-layout',
  imports: [RouterModule, CommonModule],
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss'],
})
export class HomeLayoutComponent {
  usuarioLogueado: any = null;
  isCartas: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    // Se actualiza cuando cambia el usuario
    this.authService.usuario$.subscribe((usuario) => {
      this.usuarioLogueado = usuario;
    });

    // Detectar si estamos en la vista de cartas
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isCartas = this.router.url.includes('/cartas');
      }
    });
  }

  cerrarSesion(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
