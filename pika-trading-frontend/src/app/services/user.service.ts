// Importa el decorador Injectable para marcar esta clase como un servicio inyectable
import { Injectable } from '@angular/core';

// Importa el cliente HTTP para hacer solicitudes al backend
import { HttpClient } from '@angular/common/http';

// Declara este servicio como inyectable en toda la aplicación
@Injectable({
  providedIn: 'root'
})
export class UserService {

  // URL base del endpoint de usuarios
  private apiUrl = '/api/usuarios';

  // Constructor que inyecta el cliente HTTP
  constructor(private http: HttpClient) {}

  // Método para crear un nuevo usuario utilizando el endpoint de registro
  crearUsuario(usuario: any) {
    return this.http.post('/api/registro', usuario);
  }

  // Método para obtener todos los usuarios
  getUsuarios() {
    return this.http.get(this.apiUrl);
  }

  // Método para eliminar un usuario por su ID
  eliminarUsuario(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // Método para actualizar los datos de un usuario específico
  updateUser(id: number, data: any) {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }
}
