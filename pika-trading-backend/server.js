const express = require("express");
const cors = require("cors");

const app = express();
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

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
