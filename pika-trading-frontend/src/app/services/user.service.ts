import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/usuarios';

  crearUsuario(usuario: any) {
    return this.http.post('http://localhost:3000/registro', usuario);
  }
  
  constructor(private http: HttpClient) {}

  getUsuarios() {
    return this.http.get(this.apiUrl);
  }

  eliminarUsuario(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  updateUser(id: number, data: any) {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }
}
