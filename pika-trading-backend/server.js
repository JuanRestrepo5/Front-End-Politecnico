const express = require("express");
const cors = require("cors");
const fs = require('fs');
const app = express();
const path = require('path');

app.use(cors());
app.use(express.json());

// ------------------- API ----------------------

app.get("/api/products", (req, res) => {
  res.json([
    { id: 1, name: "Cartas", description: "Cartas individuales" },
    { id: 2, name: "Sobres", description: "Sobres con cartas aleatorias" },
    { id: 3, name: "Decks", description: "Decks completos para torneos" }
  ]);
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const usuarios = getUsuarios();
  const usuario = usuarios.find(u => u.email === email && u.password === password);

  if (usuario) {
    res.json(usuario);
  } else {
    res.status(401).json({ mensaje: 'Credenciales incorrectas' });
  }
});

app.post('/api/registro', (req, res) => {
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

app.get('/api/usuarios', (req, res) => {
  const usuarios = getUsuarios();
  res.json(usuarios);
});

app.delete('/api/usuarios/:id', (req, res) => {
  let usuarios = getUsuarios();
  const id = parseInt(req.params.id);
  usuarios = usuarios.filter(u => u.id !== id);
  guardarUsuarios(usuarios);
  res.json({ mensaje: 'Usuario eliminado' });
});

app.put('/api/usuarios/:id', (req, res) => {
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

// ----------------- FUNCIONES ------------------

function getUsuarios() {
  const data = fs.readFileSync('./data/usuarios.json');
  return JSON.parse(data);
}

function guardarUsuarios(usuarios) {
  fs.writeFileSync('./data/usuarios.json', JSON.stringify(usuarios, null, 2));
}

// ----------------- FRONTEND -------------------

app.use(express.static(path.join(__dirname, 'dist', 'pika-trading-frontend', 'browser')));

// Si no encontró nada en la API ni archivos estáticos => manda el index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'pika-trading-frontend', 'browser', 'index.html'));
});

// ----------------- SERVER ---------------------

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
