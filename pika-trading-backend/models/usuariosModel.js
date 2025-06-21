const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, '../data/usuarios.json');

function getUsuarios() {
  const data = fs.readFileSync(dataPath);
  return JSON.parse(data);
}

function guardarUsuarios(usuarios) {
  fs.writeFileSync(dataPath, JSON.stringify(usuarios, null, 2));
}

module.exports = { getUsuarios, guardarUsuarios };