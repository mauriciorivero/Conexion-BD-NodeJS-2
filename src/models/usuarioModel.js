const pool = require('../config/db');

// Modelo para interactuar con la tabla 'usuario'
const UsuarioModel = {
    // Obtener todos los usuarios
    getAllUsuarios: async () => {
        try {
            const [rows] = await pool.query('SELECT * FROM usuario');
            return rows;
        } catch (error) {
            throw error;
        }
    },

    // Obtener un usuario por ID
    getUsuarioById: async (id) => {
        try {
            const [rows] = await pool.query('SELECT * FROM usuario WHERE id = ?', [id]);
            return rows[0];
        } catch (error) {
            throw error;
        }
    },

    // Crear un nuevo usuario
    createUsuario: async (usuarioData) => {
        try {
            const { primer_nombre, primer_apellido, fecha_nacimiento } = usuarioData;
            const [result] = await pool.query(
                'INSERT INTO usuario (primer_nombre, primer_apellido, fecha_nacimiento) VALUES (?, ?, ?)',
                [primer_nombre, primer_apellido, fecha_nacimiento]
            );
            return { id: result.insertId, ...usuarioData };
        } catch (error) {
            throw error;
        }
    },

    // Actualizar un usuario existente
    updateUsuario: async (id, usuarioData) => {
        try {
            const { primer_nombre, primer_apellido, fecha_nacimiento } = usuarioData;
            const [result] = await pool.query(
                'UPDATE usuario SET primer_nombre = ?, primer_apellido = ?, fecha_nacimiento = ? WHERE id = ?',
                [primer_nombre, primer_apellido, fecha_nacimiento, id]
            );
            return result.affectedRows > 0;
        } catch (error) {
            throw error;
        }
    },

    // Eliminar un usuario
    deleteUsuario: async (id) => {
        try {
            const [result] = await pool.query('DELETE FROM usuario WHERE id = ?', [id]);
            return result.affectedRows > 0;
        } catch (error) {
            throw error;
        }
    }
};

module.exports = UsuarioModel;
