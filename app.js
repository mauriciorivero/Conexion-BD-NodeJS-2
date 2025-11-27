const express = require('express');
const cors = require('cors');
require('dotenv').config();

const usuarioRoutes = require('./src/routes/usuarioRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json()); // Para parsear JSON en el body de los requests

// Rutas
app.use('/api/usuarios', usuarioRoutes);

// Ruta base para verificar que el servidor corre
app.get('/', (req, res) => {
    res.send('API de Empresa funcionando correctamente');
});

// Manejo de errores 404
app.use((req, res, next) => {
    res.status(404).json({ message: 'Ruta no encontrada' });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
