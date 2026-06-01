const fs = require("fs").promises;
const path = require("path");
// GET ALL
const getMateriaAll = async (req, res) => {
  try {
    const filePath = path.join(
      __dirname,
      "../data/extras/sys-materias.json"
    );

    const data = await fs.readFile(filePath, "utf8");
    const materias = JSON.parse(data);


    return res.status(200).json(materias);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "No se pudo obtener la lista de materias.",
    });
  }
};

// GET BY ID
const getMateriaById = async (req, res) => {
  try {
    const filePath = path.join(
      __dirname,
      "../data/extras/sys-materias.json"
    );

    const data = await fs.readFile(filePath, "utf8");
    const materias = JSON.parse(data);

    const { id } = req.params;

    const materia = materias.find((m) => m.idMateria === id);

    if (!materia) {
      return res.status(404).json({
        msg: `No existe la materia con id ${id}`,
      });
    }

    return res.status(200).json(materia);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Error al obtener la materia.",
    });
  }
};

// CREATE
const createMateria = async (req, res) => {
  try {
        const filePath = path.join(
      __dirname,
      "../data/extras/sys-materias.json"
    );

    const data = await fs.readFile(filePath, "utf8");
    const materias = JSON.parse(data);

    const existe = materias.find(
      (m) => m.idMateria === req.body.idMateria
    );

    if (existe) {
      return res.status(400).json({
        msg: "Ya existe una materia con ese ID.",
      });
    }

    const nuevaMateria = {
      idMateria: req.body.idMateria,
      nombre: req.body.nombre,
      cuatrimestre: req.body.cuatrimestre,
    };

    materias.push(nuevaMateria);

    await fs.writeFile(
      "./data/extras/sys-materias.json",
      JSON.stringify(materias, null, 2)
    );

    return res.status(201).json(nuevaMateria);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Error al crear la materia.",
    });
  }
};

// UPDATE
const updateMateria = async (req, res) => {
  try {
    const filePath = path.join(
      __dirname,
      "../data/extras/sys-materias.json"
    );

    const data = await fs.readFile(filePath, "utf8");
    const materias = JSON.parse(data);

    const { id } = req.params;

    const index = materias.findIndex((m) => m.idMateria === id);

    if (index === -1) {
      return res.status(404).json({
        msg: "Materia no encontrada.",
      });
    }

    materias[index] = {
      ...materias[index],
      ...req.body,
    };

    await fs.writeFile(
      "./data/extras/sys-materias.json",
      JSON.stringify(materias, null, 2)
    );

    return res.status(200).json(materias[index]);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Error al actualizar materia.",
    });
  }
};

// DELETE
const deleteMateria = async (req, res) => {
  try {
    const filePath = path.join(
      __dirname,
      "../data/extras/sys-materias.json"
    );

    const data = await fs.readFile(filePath, "utf8");
    const materias = JSON.parse(data);

    const { id } = req.params;

    const existe = materias.find((m) => m.idMateria === id);

    if (!existe) {
      return res.status(404).json({
        msg: "Materia no encontrada.",
      });
    }

    const nuevas = materias.filter((m) => m.idMateria !== id);

    await fs.writeFile(
      "./data/extras/sys-materias.json",
      JSON.stringify(nuevas, null, 2)
    );

    return res.status(200).json({
      msg: "Materia eliminada correctamente.",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Error al eliminar materia.",
    });
  }
};

module.exports = {
  getMateriaAll,
  getMateriaById,
  createMateria,
  updateMateria,
  deleteMateria,
};