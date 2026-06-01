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
- jeremias, matias, matko, maria: ramas individuales de desarrollo.

Flujo de trabajo:
1. Cada integrante trabaja en su propia rama.
2. Se realizan commits.
3. Se hace Pull Request hacia dev.
4. Se revisan los conflictos y se integran los cambios.
5. Finalmente, dev se fusiona con main.


# distribucion del trabajo

Matko Scabusso.
- Desarrollo de modelos POO.
- Implementación parcial de controladores.
- Preparación de deploy.

Maria Rodríguez.
- Desarrollo de rutas de la API.
- Conexión con controladores.

Jeremías Claros.
- Desarrollo de modelos en TypeScript.
- Creación de estructura de datos JSON.
- Documentación del proyecto.

Matías Carrizo
- Configuración de TypeScript y scripts npm.
- Configuración de Husky y entorno de desarrollo.
- Organización de arquitectura MVC.
- Validaciones de datos con modelos TypeScript.
- implementacion de update and delete.

# Estructura del proyecto


/controllers -> Lógica de la API.
/models -> Clases y modelos TypeScript.
/routes -> Definición de endpoints.
/data -> Archivos JSON.
/core -> Configuración del servidor.

# Descripción de carpetas

/controllers
Contiene la lógica de negocio de cada endpoint.

/models
Contiene las clases y modelos TypeScript que representan las entidades del sistema.

/routes
Define los endpoints de la API y conecta las rutas con su controlador correspondiente.

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


# Controllers
getAlumnoAll
Lee el archivo alumnos.json y devuelve todos los alumnos en formato JSON.

getAlumnoById
Busca un alumno por su legajo, si lo encuentra lo devuelve, sino retorna error 404.

createAlumno
Crea un nuevo alumno con los datos del body, lo agrega al archivo alumnos.json y guarda los cambios.

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

sys-profesores.json
[
  {
    "dniProfesor": 23456789,
    "nombre": "Laura",
    "apellido": "Quilmes",
    "email": "lauraquilmes@mail.com",
    "materias": ["PROG01", "SIST01"]
  },
]

# Deploy Render

- Pendiente de integración.
