// Importaciones necesarias para pruebas unitarias
import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

// Describe un grupo de pruebas unitarias para AuthService
describe('AuthService', () => {
  let service: AuthService; // Variable para guardar la instancia del servicio

  // Antes de cada prueba, configura el módulo de pruebas
  beforeEach(() => {
    // Configura el entorno de pruebas sin módulos personalizados
    TestBed.configureTestingModule({});
    // Inyecta una instancia del AuthService
    service = TestBed.inject(AuthService);
  });

  // Prueba básica: Verifica que el servicio se haya creado correctamente
  it('should be created', () => {
    expect(service).toBeTruthy(); // Se espera que la instancia no sea null ni undefined
  });
});

