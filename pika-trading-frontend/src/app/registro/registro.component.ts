import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'], // 
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule]
})
export class RegistroComponent {
  nombre: string = '';
  apellido: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private http: HttpClient) {}

  registrarUsuario() {
    if (this.password !== this.confirmPassword) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    const nuevoUsuario = {
      nombre: `${this.nombre} ${this.apellido}`,
      email: this.email,
      password: this.password
    };

    this.http.post('http://localhost:3000/registro', nuevoUsuario)
      .subscribe({
        next: (res) => {
          alert('¡Registro exitoso!');
          this.limpiarCampos();
        },
        error: (err) => {
          if (err.status === 409) {
            alert('El correo ya está registrado.');
          } else {
            alert('Error al registrar: ' + (err.error?.mensaje || err.message));
          }
        }
      });
  }

  limpiarCampos() {
    this.nombre = '';
    this.apellido = '';
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
  }
}

