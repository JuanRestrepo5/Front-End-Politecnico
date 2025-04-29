// Importación de decoradores y módulos necesarios
import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule, Router, NavigationEnd } from '@angular/router';

// Decorador del componente con metadatos
@Component({
  selector: 'app-registro', // Nombre del selector usado en HTML
  templateUrl: './registro.component.html', // Vista asociada
  styleUrls: ['./registro.component.scss'], // Estilos del componente
  standalone: true, // Componente independiente (Angular standalone)
  imports: [FormsModule, CommonModule, RouterModule] // Módulos necesarios
})
export class RegistroComponent {

  // Propiedades para los campos del formulario
  nombre: string = '';
  apellido: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  // Inyección del servicio HttpClient para llamadas HTTP
  constructor(private http: HttpClient) {}

  // Función que se ejecuta al enviar el formulario
  registrarUsuario() {
    // Verifica si las contraseñas coinciden antes de enviar
    if (this.password !== this.confirmPassword) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    // Crea el objeto del nuevo usuario para enviar al backend
    const nuevoUsuario = {
      nombre: `${this.nombre} ${this.apellido}`, // Nombre completo
      email: this.email,
      password: this.password
    };

    // Llamada POST al backend para registrar al usuario
    this.http.post('/api/registro', nuevoUsuario)
      .subscribe({
        // Si la respuesta es exitosa
        next: (res) => {
          alert('¡Registro exitoso!');
          this.limpiarCampos(); // Limpia los campos del formulario
        },
        // Si ocurre un error en el backend
        error: (err) => {
          if (err.status === 409) {
            alert('El correo ya está registrado.');
          } else {
            alert('Error al registrar: ' + (err.error?.mensaje || err.message));
          }
        }
      });
  }

  // Limpia los campos del formulario después del registro
  limpiarCampos() {
    this.nombre = '';
    this.apellido = '';
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
  }
}
