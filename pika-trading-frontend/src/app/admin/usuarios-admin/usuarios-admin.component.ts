import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuarios-admin',
  templateUrl: './usuarios-admin.component.html',
  styleUrl: './usuarios-admin.component.scss',
  imports: [CommonModule],
})
export class UsuariosAdminComponent implements OnInit{
  usuarios: any[] = [];

  constructor(private userService: UserService) {}

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

}
