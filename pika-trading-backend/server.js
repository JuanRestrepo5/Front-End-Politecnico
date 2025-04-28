const express = require("express");
const cors = require("cors");
const fs = require('fs');
const app = express();
const path = require('path');

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("¡Bienvenido a Pika Trading API!");
});

app.get("/products", (req, res) => {
  res.json([
    { id: 1, name: "Cartas", description: "Cartas individuales" },
    { id: 2, name: "Sobres", description: "Sobres con cartas aleatorias" },
    { id: 3, name: "Decks", description: "Decks completos para torneos" }
  ]);
});

// Cargar usuarios desde JSON
function getUsuarios() {
  const data = fs.readFileSync('./data/usuarios.json');
  return JSON.parse(data);
}

function guardarUsuarios(usuarios) {
  fs.writeFileSync('./data/usuarios.json', JSON.stringify(usuarios, null, 2));
}

// Login
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const usuarios = getUsuarios();
  const usuario = usuarios.find(u => u.email === email && u.password === password);
  
  if (usuario) {
    res.json(usuario);
  } else {
    res.status(401).json({ mensaje: 'Credenciales incorrectas' });
  }
});

// Registro
app.post('/registro', (req, res) => {
  const usuarios = getUsuarios();
  const nuevoUsuario = req.body;
  const existe = usuarios.find(u => u.email === nuevoUsuario.email);

  if (existe) {
    return res.status(409).json({ mensaje: 'El usuario ya existe' });
  }

  nuevoUsuario.id = usuarios.length ? usuarios[usuarios.length - 1].id + 1 : 1;
  nuevoUsuario.rol = 'usuario';
  usuarios.push(nuevoUsuario);
  guardarUsuarios(usuarios);
  res.status(201).json(nuevoUsuario);
});

// Obtener todos (admin)
app.get('/usuarios', (req, res) => {
  const usuarios = getUsuarios();
  res.json(usuarios);
});

// Eliminar usuario
app.delete('/usuarios/:id', (req, res) => {
  let usuarios = getUsuarios();
  const id = parseInt(req.params.id);
  usuarios = usuarios.filter(u => u.id !== id);
  guardarUsuarios(usuarios);
  res.json({ mensaje: 'Usuario eliminado' });
});

// Editar usuario
app.put('/usuarios/:id', (req, res) => {
  let usuarios = getUsuarios();
  const id = parseInt(req.params.id);
  const index = usuarios.findIndex(u => u.id === id);
  if (index !== -1) {
    usuarios[index] = { ...usuarios[index], ...req.body };
    guardarUsuarios(usuarios);
    res.json(usuarios[index]);
  } else {
    res.status(404).json({ mensaje: 'Usuario no encontrado' });
  }
});

app.use(express.static(path.join(__dirname, 'dist', 'pika-trading-frontend', 'browser')));

app.get('/*', function (req, res, next) {
  if (req.originalUrl.startsWith('/api')) {
    // Si quieres excluir tus rutas de API (opcional)
    return next();
  }
  res.sendFile(path.join(__dirname, 'dist', 'pika-trading-frontend', 'browser', 'index.html'));
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
