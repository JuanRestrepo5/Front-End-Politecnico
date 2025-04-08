// Importa configuraciones necesarias para la aplicación
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';

// Configuración principal de la aplicación
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), // Optimiza la detección de cambios
    provideRouter(routes),                                  // Provee las rutas definidas
    provideClientHydration(withEventReplay()),              // Hidrata el cliente después del renderizado SSR
    provideHttpClient(withFetch())                          // Usa fetch para peticiones HTTP
  ]
};
