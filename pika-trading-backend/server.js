require('dotenv').config();
const express = require("express");
const cors = require("cors");
const path = require('path');
const fs = require('fs');

const app = express();

app.use(cors());
app.use(express.json());

// ----------- RUTAS API -----------
const usuariosRoutes = require('./routes/usuariosRoutes');
app.use('/api', usuariosRoutes);

// Verifica si el archivo de configuración de Prisma existe
const cartasRoutes = require('./routes/cartasRoutes');
app.use('/api/cartas', cartasRoutes);


// ----------- FRONTEND ------------
const indexPath = path.join(__dirname, 'dist', 'pika-trading-frontend', 'browser', 'index.html');

app.use('/', express.static(path.join(__dirname, 'dist', 'pika-trading-frontend', 'browser')));

app.get('/{*any}', (req, res, next) => {
  res.sendFile(indexPath);
});

// ----------- MANEJO DE ERRORES -----------
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({ mensaje: err.message || 'Error interno del servidor' });
});

// ----------- INICIAR SERVIDOR -----------
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

module.exports = app; // Para pruebas automatizadas si las implementas