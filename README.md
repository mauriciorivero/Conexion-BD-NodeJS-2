# API REST con Node.js, Express y MySQL

Esta es una aplicación básica de API REST construida con Node.js y Express, conectada a una base de datos MySQL. Implementa un CRUD completo para la entidad `usuario` (referenciada como persona).

## Arquitectura

El proyecto sigue una arquitectura en capas para separar responsabilidades:

- **src/config**: Configuración de la base de datos y variables de entorno.
- **src/models**: Capa de acceso a datos. Interactúa directamente con la base de datos MySQL.
- **src/services**: Capa de lógica de negocio. Llama a los modelos y procesa la información si es necesario.
- **src/routes**: Definición de endpoints y manejo de peticiones HTTP (Request/Response).
- **app.js**: Punto de entrada de la aplicación, configuración del servidor y middlewares.

## Requisitos Previos

- Node.js instalado
- MySQL instalado y corriendo
- Base de datos `empresa` creada (usar el archivo `empresa.sql` provisto en la raíz)

## Instalación

1. Clonar el repositorio o descargar los archivos.
2. Instalar las dependencias:
   ```bash
   npm install
   ```
3. Configurar las variables de entorno:
   - El archivo `.env` ya está configurado con los valores por defecto solicitados, pero asegúrate de que coincidan con tu entorno local si cambias algo.

## Ejecución

### Backend
Para iniciar el servidor en modo desarrollo (si tienes nodemon instalado) o producción:

```bash
node app.js
# O si prefieres usar nodemon:
# npx nodemon app.js
```

El servidor correrá en `http://localhost:3000`.

### Frontend
La aplicación cuenta con un frontend básico en HTML, CSS y JavaScript ubicado en la carpeta `frontend`.

Para ejecutarlo:
1. Asegúrate de que el backend esté corriendo.
2. Abre el archivo `frontend/index.html` en tu navegador web.
   - Puedes hacerlo simplemente haciendo doble clic en el archivo o arrastrándolo a una ventana del navegador.
   - También puedes usar una extensión como "Live Server" en VS Code para servirlo.

La aplicación frontend se conectará automáticamente a `http://localhost:3000` para gestionar los usuarios.

## Documentación de la API

### Base URL
`http://localhost:3000/api`

### Endpoints de Usuario

#### 1. Obtener todos los usuarios
- **URL**: `/usuarios`
- **Método**: `GET`
- **Descripción**: Retorna una lista de todos los usuarios.
- **Respuesta Exitosa (200 OK)**:
  ```json
  [
    {
      "id": 1,
      "primer_nombre": "Mauricio",
      "primer_apellido": "Rivero",
      "fecha_nacimiento": "1984-01-02T00:00:00.000Z"
    }
  ]
  ```

#### 2. Obtener un usuario por ID
- **URL**: `/usuarios/:id`
- **Método**: `GET`
- **Descripción**: Retorna un usuario específico por su ID.
- **Respuesta Exitosa (200 OK)**:
  ```json
  {
    "id": 1,
    "primer_nombre": "Mauricio",
    "primer_apellido": "Rivero",
    "fecha_nacimiento": "1984-01-02T00:00:00.000Z"
  }
  ```
- **Error (404 Not Found)**:
  ```json
  {
    "message": "Usuario no encontrado"
  }
  ```

#### 3. Crear un nuevo usuario
- **URL**: `/usuarios`
- **Método**: `POST`
- **Body (JSON)**:
  ```json
  {
    "primer_nombre": "Juan",
    "primer_apellido": "Perez",
    "fecha_nacimiento": "1990-05-15"
  }
  ```
- **Respuesta Exitosa (201 Created)**:
  ```json
  {
    "id": 2,
    "primer_nombre": "Juan",
    "primer_apellido": "Perez",
    "fecha_nacimiento": "1990-05-15"
  }
  ```

#### 4. Actualizar un usuario
- **URL**: `/usuarios/:id`
- **Método**: `PUT`
- **Body (JSON)**:
  ```json
  {
    "primer_nombre": "Juan Carlos",
    "primer_apellido": "Perez",
    "fecha_nacimiento": "1990-05-15"
  }
  ```
- **Respuesta Exitosa (200 OK)**:
  ```json
  {
    "message": "Usuario actualizado correctamente"
  }
  ```

#### 5. Eliminar un usuario
- **URL**: `/usuarios/:id`
- **Método**: `DELETE`
- **Respuesta Exitosa (200 OK)**:
  ```json
  {
    "message": "Usuario eliminado correctamente"
  }
  ```
