const UsuarioModel = require('../models/usuarioModel');

// Servicio para manejar la lógica de negocio de usuarios
const UsuarioService = {
    // Obtener todos los usuarios
    getAllUsuarios: async () => {
        return await UsuarioModel.getAllUsuarios();
    },

    // Obtener un usuario por ID
    getUsuarioById: async (id) => {
        return await UsuarioModel.getUsuarioById(id);
    },

    // Crear un nuevo usuario
    createUsuario: async (usuarioData) => {
        // Aquí se podrían agregar validaciones adicionales antes de llamar al modelo
        if (!usuarioData.primer_nombre || !usuarioData.primer_apellido || !usuarioData.fecha_nacimiento) {
            throw new Error('Todos los campos son obligatorios');
        }
        return await UsuarioModel.createUsuario(usuarioData);
    },

    // Actualizar un usuario
    updateUsuario: async (id, usuarioData) => {
        // Aquí se podrían agregar validaciones adicionales
        return await UsuarioModel.updateUsuario(id, usuarioData);
    },

    // Eliminar un usuario
    deleteUsuario: async (id) => {
        return await UsuarioModel.deleteUsuario(id);
    }
};

module.exports = UsuarioService;
