const { Router } = require('express')

const {
  getProfesorAll,
  getProfesorByDni,
  createProfesor,
  updateProfesor,
  deleteProfesor
} = require('../../controllers/profesor.controller')

const rutas = Router()

rutas.get('/', getProfesorAll)
rutas.get('/:dni', getProfesorByDni)
rutas.post('/', createProfesor)
rutas.put('/:dni', updateProfesor)
rutas.delete('/:dni', deleteProfesor)

module.exports = rutas
