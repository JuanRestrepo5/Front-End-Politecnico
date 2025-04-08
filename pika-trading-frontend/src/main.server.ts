// Importa la función para iniciar una aplicación Angular desde el navegador en entorno de servidor
import { bootstrapApplication } from '@angular/platform-browser';

// Componente raíz de la aplicación
import { AppComponent } from './app/app.component';

// Configuración específica para el renderizado en el servidor
import { config } from './app/app.config.server';

// Función de arranque que inicializa la aplicación con la configuración del servidor
const bootstrap = () => bootstrapApplication(AppComponent, config);

// Exporta la función bootstrap como valor por defecto para que Angular la use en SSR
export default bootstrap;
