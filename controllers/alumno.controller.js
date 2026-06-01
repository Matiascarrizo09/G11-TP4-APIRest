const fs = require("fs").promises;
// import { AlumnoModel } from "../models/alumno.model";
const { AlumnoModel } = require("../models/alumno.model"); // Probando por problemas de node y docker con typescript

const getAlumnoAll = async (req, res) => {
  try {
    const data = await fs.readFile("./data/alumnos.json", "utf8");
    const alumnos = JSON.parse(data);

    return res.status(200).json(alumnos);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: "No se puedieron obtener los datos de los alumnos" });
  }
};

const getAlumnoById = async (req, res) => {
  try {
    const data = await fs.readFile("./data/alumnos.json", "utf8");
    const alumnos = JSON.parse(data);

    const { legajo } = req.params;

    const legajoId = alumnos.find(
      (a) => a.legajo /* .toString() */ === Number(legajo),
    );

    if (!legajoId) {
      return res
        .status(404)
        .json({ msg: `No existe el alumno con el legajo ${legajo}` });
    }

    return res.status(200).json(legajoId);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "No se pudo obtener el datalle del alumno con legajo n° {legajo}",
    });
  }
};

const createAlumno = async (req, res) => {
  try {
    const data = await fs.readFile("./data/alumnos.json", "utf8");
    const alumnos = JSON.parse(data);

    const ultimoLegajo = Math.max(...alumnos.map((alumno) => alumno.legajo));
    const nuevoLegajo = ultimoLegajo + 1;

    const alumno = new AlumnoModel(
      req.body.nombre,
      req.body.apellido,
      req.body.email,
      nuevoLegajo,
    );

    alumnos.push(alumno);

    await fs.writeFile("./data/alumnos.json", JSON.stringify(alumnos, null, 2));

    return res.status(201).json(alumno);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Error al crear el alumno." });
  }
};

module.exports = {
  getAlumnoAll,
  getAlumnoById,
  createAlumno,
};

const updateAlumno = async (req, res) => {
  try {
    const data = await fs.readFile('./data/alumnos.json', 'utf8')
    const alumnos = JSON.parse(data)

    const { legajo } = req.params

    const indiceAlumno = alumnos.findIndex(
      alumno => alumno.legajo === Number(legajo)
    )

    if (indiceAlumno === -1) {
      return res.status(404).json({
        msg: `No existe el alumno con legajo ${legajo}`
      })
    }

    alumnos[indiceAlumno] = {
      ...alumnos[indiceAlumno],
      nombre: req.body.nombre ?? alumnos[indiceAlumno].nombre,
      apellido: req.body.apellido ?? alumnos[indiceAlumno].apellido,
      email: req.body.email ?? alumnos[indiceAlumno].email,
      modificacion: new Date().toISOString()
    }

    await fs.writeFile(
      './data/alumnos.json',
      JSON.stringify(alumnos, null, 2)
    )

    return res.status(200).json(alumnos[indiceAlumno])
  } catch (error) {
    console.log(error)

    return res.status(500).json({
      error: 'Error al actualizar el alumno'
    })
  }
}


const deleteAlumno = async (req, res) => {
  try {
    const data = await fs.readFile('./data/alumnos.json', 'utf8')
    const alumnos = JSON.parse(data)

    const { legajo } = req.params

    const indiceAlumno = alumnos.findIndex(
      alumno => alumno.legajo === Number(legajo)
    )

    if (indiceAlumno === -1) {
      return res.status(404).json({
        msg: `No existe el alumno con legajo ${legajo}`
      })
    }

    const alumnoEliminado = alumnos[indiceAlumno]

    alumnos.splice(indiceAlumno, 1)

    await fs.writeFile(
      './data/alumnos.json',
      JSON.stringify(alumnos, null, 2)
    )

    return res.status(200).json({
      msg: 'Alumno eliminado correctamente',
      alumno: alumnoEliminado
    })
  } catch (error) {
    console.log(error)

    return res.status(500).json({
      error: 'Error al eliminar el alumno'
    })
  }
}

module.exports = {
  getAlumnoAll,
  getAlumnoById,
  createAlumno,
  updateAlumno,
  deleteAlumno
};
