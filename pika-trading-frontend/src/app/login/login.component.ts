import { Component } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AuthService } from "../services/auth.service";
import {  OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule]
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  error: string = '';

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService // 👈 Inyectar AuthService
  ) {}

  onSubmit() {
    const datos = { email: this.email, password: this.password };

    this.http.post<any>('http://localhost:3000/login', datos).subscribe({
      next: (user) => {
        this.authService.setUser(user); 

        // Redirigir según rol
        if (user.rol === 'admin') {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/cartas']);
        }
      },
      error: () => {
        this.error = 'Correo o contraseña incorrectos';
      }
    });
  }

  ngOnInit(): void {
    const user = this.authService.getUser();
    if (user) {
      this.router.navigate(user.rol === 'admin' ? ['/admin'] : ['/cartas']);
    }
  }

}
