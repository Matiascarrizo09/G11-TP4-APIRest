const fs = require("fs").promises;
const { ProfesorModel } = require("../models/extras/profesor.model");

const getProfesorAll = async (req, res) => {
  try {
    const data = await fs.readFile("./data/extras/sys-profesores.json", "utf8");
    const profesores = JSON.parse(data);

    return res.status(200).json(profesores);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: "No se pudo obtener la lista de profesores." });
  }
};

const getProfesorByDni = async (req, res) => {
  try {
    const data = await fs.readFile("./data/extras/sys-profesores.json", "utf8");
    const profesores = JSON.parse(data);

    const { dni } = req.params;

    const numeroDni = profesores.find((p) => p.dniProfesor === Number(dni));

    if (!numeroDni) {
      return res
        .status(404)
        .json({ msg: `No existe un profesor con este DNI.` });
    }

    return res.status(200).json(numeroDni);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "No se pudo obtener detalles del profesor.",
    });
  }
};

const createProfesor = async (req, res) => {
  try {
    const data = await fs.readFile("./data/extras/sys-profesores.json", "utf8");
    const profesores = JSON.parse(data);

    const profesorExists = profesores.find(
      (p) => p.dniProfesor === Number(req.body.dni),
    );
    if (profesorExists) {
      return res
        .status(400)
        .json({ error: "Ya existe un profesor con este DNI." });
    }

    const materiasData = await fs.readFile(
      "./data/extras/sys-materias.json",
      "utf8",
    );
    const materiasDisponibles = JSON.parse(materiasData);

    const materiasValidas = req.body.materias.every((materiaID) =>
      materiasDisponibles.some((m) => m.idMateria === materiaID),
    );

    if (!materiasValidas) {
      return res.status(400).json({
        error:
          "Uno o más de los IDs introducidos no corresponden a ninguna materia.",
      });
    }

    const profesor = new ProfesorModel(
      req.body.nombre,
      req.body.apellido,
      req.body.email,
      req.body.dni,
      req.body.materias,
    );

    profesores.push(profesor);

    await fs.writeFile(
      "./data/extras/sys-profesores.json",
      JSON.stringify(profesores, null, 2),
    );

    return res.status(201).json(profesor);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: error.message });
  }
};

const updateProfesor = async (req, res) => {
  try {
    const data = await fs.readFile("./data/extras/sys-profesores.json", "utf8");
    const profesores = JSON.parse(data);

    const { dni } = req.params;

    const indiceProfesor = profesores.findIndex(
      (p) => p.dniProfesor === Number(dni),
    );

    if (indiceProfesor === -1) {
      return res.status(404).json({
        msg: "No existe un profesor con este DNI.",
      });
    }

    profesores[indiceProfesor] = {
      ...profesores[indiceProfesor],
      ...req.body,
    };

    await fs.writeFile(
      "./data/extras/sys-profesores.json",
      JSON.stringify(profesores, null, 2),
    );

    return res.status(200).json(profesores[indiceProfesor]);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Error al actualizar profesor.",
    });
  }
};

const deleteProfesor = async (req, res) => {
  try {
    const data = await fs.readFile("./data/extras/sys-profesores.json", "utf8");
    const profesores = JSON.parse(data);

    const { dni } = req.params;

    const profesorExiste = profesores.find(
      (p) => p.dniProfesor === Number(dni),
    );

    if (!profesorExiste) {
      return res.status(404).json({
        msg: "No existe un profesor con este DNI.",
      });
    }

    const profesoresActualizados = profesores.filter(
      (p) => p.dniProfesor !== Number(dni),
    );

    await fs.writeFile(
      "./data/extras/sys-profesores.json",
      JSON.stringify(profesoresActualizados, null, 2),
    );

    return res.status(200).json({
      msg: "Profesor eliminado correctamente.",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Error al eliminar profesor.",
    });
  }
};

module.exports = {
  getProfesorAll,
  getProfesorByDni,
  createProfesor,
  updateProfesor,
  deleteProfesor,
};
