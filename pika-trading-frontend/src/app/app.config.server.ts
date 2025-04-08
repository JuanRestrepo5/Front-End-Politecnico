// Importa funciones y tipos necesarios para la configuración de la aplicación en el servidor
import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';

// Configuración específica para el entorno del servidor
const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(), // Habilita el renderizado del lado del servidor
  ]
};

// Combina la configuración del cliente con la del servidor
export const config = mergeApplicationConfig(appConfig, serverConfig);

