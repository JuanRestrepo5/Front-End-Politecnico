// Importa TestBed para configurar el entorno de pruebas
import { TestBed } from '@angular/core/testing';

// Importa el servicio que se va a probar
import { UserService } from './user.service';

// Descripción del conjunto de pruebas para UserService
describe('UserService', () => {
  let service: UserService; // Variable donde se almacenará la instancia del servicio

  // Antes de cada prueba, se configura el módulo de pruebas
  beforeEach(() => {
    TestBed.configureTestingModule({}); // Configuración básica sin módulos adicionales
    service = TestBed.inject(UserService); // Inyección del servicio desde TestBed
  });

  // Prueba básica: verificar que el servicio se crea correctamente
  it('should be created', () => {
    expect(service).toBeTruthy(); // Se espera que la instancia del servicio no sea null ni undefined
  });
});
