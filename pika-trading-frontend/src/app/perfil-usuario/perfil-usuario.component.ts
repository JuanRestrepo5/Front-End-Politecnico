import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { RouterModule, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.scss'],
  imports: [CommonModule, FormsModule],
})
export class PerfilUsuarioComponent implements OnInit {
  // Objeto para almacenar los datos del usuario
  usuario: any = null;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router,
  ) {}

  // Se ejecuta al cargar el componente
  ngOnInit(): void {
    const userData = localStorage.getItem('usuario');
    if (userData) {
      this.usuario = JSON.parse(userData); // Carga los datos del usuario desde el localStorage
    }
  }

  // Envía los cambios al servidor y guarda en localStorage si tiene éxito
  guardarCambios() {
    this.http.put(`http://localhost:3000/usuarios/${this.usuario.id}`, this.usuario)
      .subscribe({
        next: () => {
          alert('Datos actualizados correctamente');
          localStorage.setItem('usuario', JSON.stringify(this.usuario)); // Actualiza el localStorage
        },
        error: () => {
          alert('Error al actualizar los datos');
        }
      });
  }

  // Bandera que indica si el modo edición está activo
  editando: boolean = false;

  // Activa el modo edición
  activarEdicion() {
    this.editando = true;
  }

  // Cancela el modo edición
  cancelarEdicion() {
    this.editando = false;
  }

  // Cierra sesión y redirige a la página principal
  cerrarSesion(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
