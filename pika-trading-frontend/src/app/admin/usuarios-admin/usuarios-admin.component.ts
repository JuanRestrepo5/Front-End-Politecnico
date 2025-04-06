import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios-admin',
  templateUrl: './usuarios-admin.component.html',
  styleUrls: ['./usuarios-admin.component.scss'],
  imports: [CommonModule],
})

export class UsuariosAdminComponent implements OnInit{
  usuarios: any[] = [];
  //usuarioEditando: any = null;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {
    this.userService.getUsuarios().subscribe((data: any) => {
      console.log('Usuarios cargados:', data);
      this.usuarios = data;
    });
  }

  eliminarUsuario(id: number) {
    this.userService.eliminarUsuario(id).subscribe(() => {
      this.usuarios = this.usuarios.filter(u => u.id !== id);
    });
  }

  editarUsuario(id: number) {
    console.log('Editar usuario con ID:', id);
  }

  

  irAFormularioNuevoUsuario() {
    this.router.navigate(['/admin/crear-usuario']); // o la ruta que tengas configurada
  }
  
/*
  editarUsuario(id: number) {
    const usuario = this.usuarios.find(u => u.id === id);
    this.usuarioEditando = { ...usuario }; // Se clona para no modificar directo
  }

  guardarCambios() {
    const index = this.usuarios.findIndex(u => u.id === this.usuarioEditando.id);
    if (index !== -1) {
      this.usuarios[index] = { ...this.usuarioEditando };
      this.usuarioEditando = null; // Cierra el modo edición
    }
  }

  cancelarEdicion() {
    this.usuarioEditando = null;
  }
*/
}
