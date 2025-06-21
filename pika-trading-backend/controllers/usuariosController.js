const bcrypt = require('bcrypt');
const { getUsuarios, guardarUsuarios } = require('../models/usuariosModel');

function validarUsuario({ nombre, email, password }) {
  if (!nombre || !email || !password) {
    return 'Todos los campos son obligatorios';
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return 'Email no válido';
  }
  if (password.length < 6) {
    return 'La contraseña debe tener al menos 6 caracteres';
  }
  return null;
}

const usuariosController = {
  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const usuarios = getUsuarios();
      const usuario = usuarios.find(u => u.email === email);
      if (!usuario) return res.status(401).json({ mensaje: 'Usuario no encontrado' });
      const match = await bcrypt.compare(password, usuario.password);
      if (!match) return res.status(401).json({ mensaje: 'Contraseña incorrecta' });
      res.json(usuario);
    } catch (err) {
      next(err);
    }
  },

  async registro(req, res, next) {
    try {
      const usuarios = getUsuarios();
      const nuevoUsuario = req.body;
      const error = validarUsuario(nuevoUsuario);
      if (error) return res.status(400).json({ mensaje: error });
      const existe = usuarios.find(u => u.email === nuevoUsuario.email);
      if (existe) return res.status(409).json({ mensaje: 'El usuario ya existe' });
      nuevoUsuario.id = usuarios.length ? usuarios[usuarios.length - 1].id + 1 : 1;
      nuevoUsuario.rol = 'usuario';
      nuevoUsuario.password = await bcrypt.hash(nuevoUsuario.password, 10);
      usuarios.push(nuevoUsuario);
      guardarUsuarios(usuarios);
      res.status(201).json(nuevoUsuario);
    } catch (err) {
      next(err);
    }
  },

  async crear(req, res, next) {
    try {
      const { nombre, email, password, rol } = req.body;
      if (!nombre || !email || !password || !rol) {
        return res.status(400).json({ mensaje: 'Todos los campos son obligatorios' });
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ mensaje: 'Email no válido' });
      }
      if (password.length < 6) {
        return res.status(400).json({ mensaje: 'La contraseña debe tener al menos 6 caracteres' });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const nuevoUsuario = { id: Date.now(), nombre, email, password: hashedPassword, rol };
      const usuarios = getUsuarios();
      const existe = usuarios.find(u => u.email === nuevoUsuario.email);
      if (existe) return res.status(409).json({ mensaje: 'El usuario ya existe' });
      nuevoUsuario.id = usuarios.length ? usuarios[usuarios.length - 1].id + 1 : 1;
      usuarios.push(nuevoUsuario);
      guardarUsuarios(usuarios);
      res.status(201).json(nuevoUsuario);
    } catch (err) {
      next(err);
    }
  },

  listar(req, res, next) {
    try {
      const usuarios = getUsuarios();
      res.json(usuarios);
    } catch (err) {
      next(err);
    }
  },

  eliminar(req, res, next) {
    try {
      let usuarios = getUsuarios();
      const id = parseInt(req.params.id);
      usuarios = usuarios.filter(u => u.id !== id);
      guardarUsuarios(usuarios);
      res.json({ mensaje: 'Usuario eliminado' });
    } catch (err) {
      next(err);
    }
  },

  async actualizar(req, res, next) {
    try {
      let usuarios = getUsuarios();
      const id = parseInt(req.params.id);
      const index = usuarios.findIndex(u => u.id === id);
      if (index !== -1) {
        const { nombre, email, password, rol } = req.body;
        if (!nombre || !email || !rol) {
          return res.status(400).json({ mensaje: 'Nombre, email y rol son obligatorios' });
        }
        usuarios[index].nombre = nombre;
        usuarios[index].email = email;
        usuarios[index].rol = rol;
        if (password && password.length >= 6) {
          usuarios[index].password = await bcrypt.hash(password, 10);
        }
        guardarUsuarios(usuarios);
        res.json(usuarios[index]);
      } else {
        res.status(404).json({ mensaje: 'Usuario no encontrado' });
      }
    } catch (err) {
      next(err);
    }
  }
};

module.exports = usuariosController;