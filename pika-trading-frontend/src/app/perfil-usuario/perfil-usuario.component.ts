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
  usuario: any = null;

  constructor(private http: HttpClient, private authService: AuthService, private router: Router,) {}

  ngOnInit(): void {
    const userData = localStorage.getItem('usuario');
    if (userData) {
      this.usuario = JSON.parse(userData);
    }
  }

  guardarCambios() {
    this.http.put(`http://localhost:3000/usuarios/${this.usuario.id}`, this.usuario)
      .subscribe({
        next: () => {
          alert('Datos actualizados correctamente');
          localStorage.setItem('usuario', JSON.stringify(this.usuario));
        },
        error: () => {
          alert('Error al actualizar los datos');
        }
      });
  }

  editando: boolean = false;

  activarEdicion() {
  this.editando = true;
  }

  cancelarEdicion() {
  this.editando = false;
  }

  cerrarSesion(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}

