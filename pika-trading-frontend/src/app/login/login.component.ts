import { Component } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AuthService } from "../services/auth.service";
import { OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";

// Decorador del componente
@Component({
  selector: 'app-login', // Selector que se usa en HTML para llamar a este componente
  templateUrl: './login.component.html', // Archivo de plantilla
  styleUrls: ['./login.component.scss'], // Estilos asociados
  standalone: true, // Componente independiente (sin necesidad de estar en declarations)
  imports: [FormsModule, CommonModule, RouterModule] // Módulos necesarios para el componente
})
export class LoginComponent implements OnInit {
  
  // Propiedades vinculadas al formulario
  email: string = '';
  password: string = '';
  error: string = '';

  // Inyección de dependencias
  constructor(
    private http: HttpClient, // Para hacer peticiones HTTP
    private router: Router, // Para redirecciones
    private authService: AuthService // Servicio de autenticación
  ) {}

  // Función que se ejecuta al enviar el formulario
  onSubmit() {
    const datos = { email: this.email, password: this.password };

    this.http.post<any>('/api/login', datos).subscribe({
      next: (user) => {
        this.authService.setUser(user); // Guarda el usuario autenticado en el servicio

        // Redirige según el rol del usuario
        if (user.rol === 'admin') {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/cartas']);
        }
      },
      error: () => {
        // En caso de error, se muestra mensaje
        this.error = 'Correo o contraseña incorrectos';
      }
    });
  }

  // Hook que se ejecuta al cargar el componente
  ngOnInit(): void {
    const user = this.authService.getUser();
    
    // Si ya hay usuario logueado, redirige según su rol
    if (user) {
      this.router.navigate(user.rol === 'admin' ? ['/admin'] : ['/cartas']);
    }
  }

}
