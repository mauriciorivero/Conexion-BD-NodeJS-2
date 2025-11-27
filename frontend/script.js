const API_URL = 'http://localhost:3000/api/usuarios';

// Elementos del DOM
const usuarioForm = document.getElementById('usuario-form');
const usuariosTableBody = document.querySelector('#usuarios-table tbody');
const formTitle = document.getElementById('form-title');
const btnSubmit = document.getElementById('btn-submit');
const btnCancel = document.getElementById('btn-cancel');
const usuarioIdInput = document.getElementById('usuario-id');
const primerNombreInput = document.getElementById('primer_nombre');
const primerApellidoInput = document.getElementById('primer_apellido');
const fechaNacimientoInput = document.getElementById('fecha_nacimiento');

// Estado de la aplicación (para saber si estamos editando)
let isEditing = false;

// Función para obtener y mostrar los usuarios
async function fetchUsuarios() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Error al obtener usuarios');
        const usuarios = await response.json();
        renderTable(usuarios);
    } catch (error) {
        console.error('Error:', error);
        alert('No se pudo cargar la lista de usuarios');
    }
}

// Función para renderizar la tabla de usuarios
function renderTable(usuarios) {
    usuariosTableBody.innerHTML = ''; // Limpiar tabla
    usuarios.forEach(usuario => {
        const tr = document.createElement('tr');
        // Formatear fecha para mostrar solo YYYY-MM-DD
        const fecha = new Date(usuario.fecha_nacimiento).toISOString().split('T')[0];

        tr.innerHTML = `
            <td>${usuario.id}</td>
            <td>${usuario.primer_nombre}</td>
            <td>${usuario.primer_apellido}</td>
            <td>${fecha}</td>
            <td>
                <button class="btn-edit" onclick="startEdit(${usuario.id}, '${usuario.primer_nombre}', '${usuario.primer_apellido}', '${fecha}')">Editar</button>
                <button class="btn-delete" onclick="deleteUsuario(${usuario.id})">Eliminar</button>
            </td>
        `;
        usuariosTableBody.appendChild(tr);
    });
}

// Función para manejar el envío del formulario (Crear o Editar)
usuarioForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const usuarioData = {
        primer_nombre: primerNombreInput.value,
        primer_apellido: primerApellidoInput.value,
        fecha_nacimiento: fechaNacimientoInput.value
    };

    try {
        if (isEditing) {
            // Editar usuario existente
            const id = usuarioIdInput.value;
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(usuarioData)
            });

            if (!response.ok) throw new Error('Error al actualizar usuario');
            alert('Usuario actualizado correctamente');
        } else {
            // Crear nuevo usuario
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(usuarioData)
            });

            if (!response.ok) throw new Error('Error al crear usuario');
            alert('Usuario creado correctamente');
        }

        resetForm();
        fetchUsuarios(); // Recargar la lista
    } catch (error) {
        console.error('Error:', error);
        alert('Ocurrió un error al guardar el usuario');
    }
});

// Función para preparar el formulario para edición
window.startEdit = (id, nombre, apellido, fecha) => {
    isEditing = true;
    formTitle.textContent = 'Editar Usuario';
    btnSubmit.textContent = 'Actualizar';
    btnCancel.style.display = 'inline-block';

    usuarioIdInput.value = id;
    primerNombreInput.value = nombre;
    primerApellidoInput.value = apellido;
    fechaNacimientoInput.value = fecha;

    // Scroll hacia el formulario
    document.querySelector('.container').scrollIntoView({ behavior: 'smooth' });
};

// Función para eliminar un usuario
window.deleteUsuario = async (id) => {
    if (!confirm('¿Estás seguro de que deseas eliminar este usuario?')) return;

    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });

        if (!response.ok) throw new Error('Error al eliminar usuario');

        alert('Usuario eliminado correctamente');
        fetchUsuarios(); // Recargar la lista
    } catch (error) {
        console.error('Error:', error);
        alert('No se pudo eliminar el usuario');
    }
};

// Función para resetear el formulario
function resetForm() {
    isEditing = false;
    formTitle.textContent = 'Crear Nuevo Usuario';
    btnSubmit.textContent = 'Guardar';
    btnCancel.style.display = 'none';
    usuarioForm.reset();
    usuarioIdInput.value = '';
}

// Evento para el botón cancelar
btnCancel.addEventListener('click', resetForm);

// Cargar usuarios al iniciar
document.addEventListener('DOMContentLoaded', fetchUsuarios);
