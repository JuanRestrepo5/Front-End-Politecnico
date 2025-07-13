const express = require('express');
const prisma = require('../prisma/client');
const router = express.Router();

// Obtener todas las cartas
router.get('/', async (req, res, next) => {
  try {
    const cartas = await prisma.carta.findMany();
    res.json(cartas);
  } catch (err) {
    next(err);
  }
});

// Crear una carta nueva
router.post('/', async (req, res, next) => {
  try {
    const { nombre, imagen, precio, rareza, usuarioId } = req.body;
    const carta = await prisma.carta.create({
      data: { nombre, imagen, precio, rareza, usuarioId }
    });
    res.status(201).json(carta);
  } catch (err) {
    next(err);
  }
});

module.exports = router;