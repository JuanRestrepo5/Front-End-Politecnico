# Pika Trading - Plataforma de Venta de Cartas Pokémon

Este proyecto consiste en una página web donde los usuarios pueden **comprar, vender e intercambiar cartas Pokémon**. Está dividido en dos partes principales:

- **Frontend**: desarrollado con Angular.
- **Backend**: desarrollado con Node.js y datos almacenados en archivos `.json`.

---

## 🗂️ Estructura de Carpetas


---

PROYECTO_CARTAS_POKEMON/ 
├── pika-trading-backend/ 
│ 
├── data/ 
│ 
│ 
└── usuarios.json 
│ 
├── server.js 
│ 
└── package.json 
│ 
├── pika-trading-frontend/ 
│ 
└── src/ 
│ 
└── app/ 
│ 
├── admin/ # Panel de administración 
│ 
├── cart/ # Carrito de compras 
│ 
├── guards/ # Protección de rutas 
│ 
├── home/ # Página de inicio 
│ 
├── layout/ # Componentes compartidos 
│ 
├── login/ # Login de usuarios 
│ 
├── pages/cartas/ # Visualización de cartas 
│ 
├── perfil-usuario/ # Perfil del usuario 
│ 
├── recuperar-contrasena/ # Recuperar contraseña 
│ 
├── registro/ # Registro de usuario 
│ 
├── sobre-nosotros/ # Info de la página 
│ 
├── services/ # Servicios como auth y users 
│ 
└── app.module.ts # Módulo principal

---

## ⚙️ Tecnologías Usadas

- **Angular** (Framework frontend)
- **SCSS** (Estilos)
- **Node.js** (Servidor backend)
- **JSON** (Datos simulados)

---

## 🚀 Instrucciones para Ejecutar

### Backend

``bash

cd pika-trading-backend
npm install
node server.js

### Frontend
cd pika-trading-frontend
npm install
ng serve






