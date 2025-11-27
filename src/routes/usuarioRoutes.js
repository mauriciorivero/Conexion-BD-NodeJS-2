const express = require('express');
const router = express.Router();
const UsuarioService = require('../services/usuarioService');

// Ruta para obtener todos los usuarios
router.get('/', async (req, res) => {
    try {
        const usuarios = await UsuarioService.getAllUsuarios();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Ruta para obtener un usuario por ID
router.get('/:id', async (req, res) => {
    try {
        const usuario = await UsuarioService.getUsuarioById(req.params.id);
        if (usuario) {
            res.json(usuario);
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Ruta para crear un nuevo usuario
router.post('/', async (req, res) => {
    try {
        const nuevoUsuario = await UsuarioService.createUsuario(req.body);
        res.status(201).json(nuevoUsuario);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Ruta para actualizar un usuario
router.put('/:id', async (req, res) => {
    try {
        const actualizado = await UsuarioService.updateUsuario(req.params.id, req.body);
        if (actualizado) {
            res.json({ message: 'Usuario actualizado correctamente' });
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Ruta para eliminar un usuario
router.delete('/:id', async (req, res) => {
    try {
        const eliminado = await UsuarioService.deleteUsuario(req.params.id);
        if (eliminado) {
            res.json({ message: 'Usuario eliminado correctamente' });
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
