# Documentación #
API REST - Gestión Académica

# Grupo 11

# Integrantes
- Matías Carrizo.
- Matko Scabusso.
- Maria Rodríguez.
- Jeremías Claros.

# Descripción del proyecto

Este proyecto consiste en el desarrollo de una API REST utilizando Node.js, Express y TypeScript para la gestión de alumnos, materias, notas y profesores.

La API permite realizar operaciones CRUD (Create, Read, Update y Delete) mediante distintos endpoints, utilizando archivos JSON como persistencia de datos simulando una base de datos.

El proyecto implementa arquitectura MVC (Modelo - Vista - Controlador), manejo de rutas modularizadas, validaciones con TypeScript y despliegue utilizando Docker y Render.

# Tecnologías utilizadas
- Node.js
- Express
- TypeScript
- Nodemon
- Docker
- Render
- Postman
- Git y GitHub
- Husky
- StandardJS

# Metodología de trabajo con Git y GitHub

Se trabajó utilizando una metodología basada en ramas:

- main: rama principal de entrega.
- dev: rama de integración del proyecto.
- /nombre: ramas individuales de desarrollo por integrante.

Cada integrante realizó commits en su propia rama y posteriormente se realizaron Pull Requests hacia la rama dev.

Finalmente, una vez validado el funcionamiento del proyecto, se realizó el merge final hacia main.

# Distribución del trabajo

Matías Carrizo
- Configuración de Express y middlewares.
- Configuración de TypeScript y scripts npm.
- Configuración de Husky y entorno de desarrollo.
- Organización de arquitectura MVC.
- Validaciones de datos con modelos TypeScript.
- Integración final y depuración del proyecto.

# Estructura del proyecto

/controllers
/models
/routes
/data
/core

# Descripción de carpetas

/controllers
Contiene la lógica de negocio de cada endpoint.

/models
Contiene las clases y modelos TypeScript utilizados para validar estructuras de datos.

/routes
Define los endpoints de la API y conecta las rutas con los controladores.

/data
Almacena los archivos JSON utilizados como persistencia de datos.

/core
Contiene la configuración principal del servidor.

# Scripts utilizados

Ejecutar proyecto en desarrollo
npm run dev
Ejecutar proyecto
npm start

# Endpoints principales

GET /alumnos
Obtiene todos los alumnos.

GET /alumnos/:legajo
Obtiene un alumno específico mediante su legajo.

POST /alumnos
Crea un nuevo alumno.

PUT /alumnos/:legajo
Modifica un alumno existente.

DELETE /alumnos/:legajo
Elimina un alumno.

# Ejemplo de JSON utilizado

alumnos.json
[
  {
    "legajo": 100,
    "nombre": "Matias",
    "apellido": "Carrizo",
    "activo": true
  }
]

# Postman

- Pendiente de integración.

# Deploy Render

- Pendiente de integración.

# Front-end

- Pendiente de integración.