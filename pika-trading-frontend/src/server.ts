// Importa el token APP_BASE_HREF para definir la base de la aplicación
import { APP_BASE_HREF } from '@angular/common';

// Importa utilidades de SSR y verificación del módulo principal
import { CommonEngine, isMainModule } from '@angular/ssr/node';

// Importa Express para crear el servidor
import express from 'express';

// Funciones de manejo de rutas y archivos del sistema
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

// Importa la función bootstrap para renderizar Angular desde el servidor
import bootstrap from './main.server';

// Define la carpeta de distribución del servidor
const serverDistFolder = dirname(fileURLToPath(import.meta.url));

// Define la carpeta de distribución del navegador (frontend compilado)
const browserDistFolder = resolve(serverDistFolder, '../browser');

// Ruta del archivo HTML que se usará para renderizar
const indexHtml = join(serverDistFolder, 'index.server.html');

// Inicializa la aplicación Express
const app = express();

// Crea una instancia del motor SSR de Angular
const commonEngine = new CommonEngine();

/**
 * Servir archivos estáticos desde la carpeta /browser
 */
app.get(
  '**',
  express.static(browserDistFolder, {
    maxAge: '1y', // Cache por un año
    index: 'index.html'
  }),
);

/**
 * Renderiza la aplicación Angular para todas las demás rutas
 */
app.get('**', (req, res, next) => {
  const { protocol, originalUrl, baseUrl, headers } = req;

  commonEngine
    .render({
      bootstrap,
      documentFilePath: indexHtml,
      url: `${protocol}://${headers.host}${originalUrl}`,
      publicPath: browserDistFolder,
      providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
    })
    .then((html) => res.send(html))
    .catch((err) => next(err));
});

/**
 * Inicia el servidor si este archivo es el punto de entrada principal.
 * Escucha en el puerto especificado por la variable de entorno PORT, o 4000 por defecto.
 */
if (isMainModule(import.meta.url)) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

export default app;
