import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-usuarios-admin',
  templateUrl: './usuarios-admin.component.html',
  styleUrls: ['./usuarios-admin.component.scss'],
  imports: [CommonModule, FormsModule],
})
export class UsuariosAdminComponent implements OnInit {
  usuarios: any[] = [];
  usuarioEditando: any = null;
  mostrarFormulario: boolean = false;

  nuevoUsuario = {
    nombre: '',
    apellido: '',
    correo: '',
    contrasena: ''
  };

  constructor(
    private userService: UserService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  // =============================
  // CARGAR USUARIOS EXISTENTES
  // =============================
  obtenerUsuarios() {
    this.userService.getUsuarios().subscribe((data: any) => {
      console.log('Usuarios cargados:', data);
      this.usuarios = data;
    });
  }

  // =============================
  // ELIMINAR USUARIO
  // =============================
  eliminarUsuario(id: number) {
    const confirmar = confirm('¿Estás seguro de que quieres eliminar este usuario?');

    if (confirmar) {
      this.userService.eliminarUsuario(id).subscribe(() => {
        this.usuarios = this.usuarios.filter(u => u.id !== id);
      });
    }
  }

  // =============================
  // NAVEGAR A FORMULARIO NUEVO
  // =============================
  irAFormularioNuevoUsuario() {
    this.router.navigate(['/admin/crear-usuario']);
  }

  // =============================
  // EDITAR USUARIO
  // =============================
  editarUsuario(id: number) {
    const usuario = this.usuarios.find(u => u.id === id);
    this.usuarioEditando = { ...usuario }; // Clonado para evitar editar directamente
  }

  cancelarEdicion() {
    this.usuarioEditando = null;
  }

  guardarCambios() {
    if (!this.usuarioEditando) return;

    const id = this.usuarioEditando.id;

    this.http.put(`http://localhost:3000/usuarios/${id}`, this.usuarioEditando)
      .subscribe({
        next: () => {
          const index = this.usuarios.findIndex(u => u.id === id);
          if (index !== -1) {
            this.usuarios[index] = { ...this.usuarioEditando };
          }
          this.usuarioEditando = null;
          alert('Cambios guardados correctamente');
        },
        error: (err) => {
          console.error('Error al guardar cambios:', err);
          alert('Error al guardar los cambios');
        }
      });
  }

  // =============================
  // AGREGAR NUEVO USUARIO
  // =============================
  agregarUsuario() {
    const nuevo = {
      nombre: `${this.nuevoUsuario.nombre} ${this.nuevoUsuario.apellido}`,
      correo: this.nuevoUsuario.correo,
      contrasena: this.nuevoUsuario.contrasena
    };

    this.userService.crearUsuario(nuevo).subscribe({
      next: (usuarioCreado: any) => {
        this.usuarios.push(usuarioCreado);
        alert('Usuario creado exitosamente');
        this.resetearFormulario();
      },
      error: (error) => {
        console.error('Error al crear usuario:', error);
        alert('Ocurrió un error al crear el usuario');
      }
    });
  }

  // =============================
  // RESETEAR FORMULARIO
  // =============================
  private resetearFormulario() {
    this.nuevoUsuario = {
      nombre: '',
      apellido: '',
      correo: '',
      contrasena: ''
    };
    this.mostrarFormulario = false;
  }
}
