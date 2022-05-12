const { Necesidad, Categoria, Usuario, Distrito } = require("../models/index");

//defino las funciones que voy a exportar a routes:

////OBTENER TODA LA LISTA DE NECESIDADES//////////
const listaNecesidad = (req, res) => {
  let relacion = { include: [{ model: Categoria }, { model: Usuario, include: { model: Distrito } }] };
  Necesidad.findAll(relacion)
    .then((lista) =>
      res.json({
        ok: true,
        data: lista,
      })
    )
    .catch((err) =>
      res.json({
        ok: false,
        error: err,
      })
    );
};

//OBTENER UNA NECESIDAD A PARTIR DE SU ID///
const getNecById = (req, res) => {
  const idNecesidad = req.params.id;
  Necesidad.findOne({ where: { id: idNecesidad }, include: [{ model: Categoria }, { model: Usuario }] })
    .then((item) => res.status(200).json({ ok: true, data: item }))
    .catch((err) => res.status(400).json({ ok: false, msg: err }));
};

///POST NUEVA NECESIDAD/////////////////////
const nuevaNecesidad = (req, res) => {
  const necesidad = {
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    usuarios_idUsuarios: req.body.usuarios_idUsuarios,
    categorias_id: req.body.categorias_id,
  };
  console.log(necesidad);
  Necesidad.create(necesidad)
    .then((a) => res.json({ ok: true, necesidad: a }))
    .catch((error) => res.json({ ok: false, err: error }));
};

//ON UPDATE/////////////////////////////////
const updateNecesidad = (req, res) => {
  const idABuscar = req.params.id;

  Necesidad.findOne({
    where: {
      id: idABuscar,
    },
  })
    .then((fo) => fo.update(req.body))
    .then(() => res.json({ ok: true }))
    .catch((error) => res.json({ ok: false, err: error }));
};

///ON DELETE///////////////////////////////////////
const deleteNecesidad = (req, res) => {
  const idABuscar = req.params.id;

  Necesidad.destroy({
    where: {
      id: idABuscar,
    },
  })
    .then((lista) => res.status(200).json({ ok: true }))
    .catch((err) => res.status(400).json({ ok: false, error: err.parent.sqlMessage }));
};

module.exports = { listaNecesidad, nuevaNecesidad, updateNecesidad, deleteNecesidad, getNecById };
