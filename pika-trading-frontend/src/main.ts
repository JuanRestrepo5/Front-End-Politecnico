// Importa la función para iniciar la aplicación desde el navegador
import { bootstrapApplication } from '@angular/platform-browser';

// Importa el componente raíz de la aplicación
import { AppComponent } from './app/app.component';

// Importa la configuración general de la aplicación
import { appConfig } from './app/app.config';

// Inicializa la aplicación con la configuración indicada
bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err)); // Manejo de errores en caso de fallo al iniciar
