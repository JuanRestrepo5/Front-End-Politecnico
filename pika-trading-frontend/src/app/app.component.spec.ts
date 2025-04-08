// Importa las herramientas necesarias para realizar pruebas
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

// Descripción del conjunto de pruebas para AppComponent
describe('AppComponent', () => {

  // Configura el entorno de pruebas antes de cada prueba individual
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent], // Importa el componente principal
    }).compileComponents();
  });

  // Prueba que la app se cree correctamente
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy(); // Se espera que la instancia del componente sea verdadera (exista)
  });

  // Prueba que el título del componente sea el esperado
  it(`should have the 'pika-trading-frontend' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('pika-trading-frontend'); // Se espera que el título coincida
  });

  // Prueba que el título se renderice correctamente en el DOM
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges(); // Aplica los cambios del componente en el DOM
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, pika-trading-frontend');
  });
});
