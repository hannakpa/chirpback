const { Interes, Articulo, Usuario } = require("../models/index");

//defino las funciones que voy a exportar a routes:

////OBTENER TODA LA LISTA DE NECESIDADES//////////

const listaInteres = (req, res) => {
  let relacion = { include: [{ model: Articulo }, { model: Usuario }] };
  Interes.findAll(relacion)
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
const getInteresById = (req, res) => {
  const idInteres = req.params.id;
  Interes.findOne({ where: { id: idInteres }, include: [{ model: Articulo }, { model: Usuario }] })
    .then((item) => res.status(200).json({ ok: true, data: item }))
    .catch((err) => res.status(400).json({ ok: false, msg: err }));
};

//OBTENER INTERESESfindAll A PARTIR DEL ID DE USUARIO PROPIETARIO DEL ARTICULO
//usuarios_idUsuarios
const getInteresByUsuarioIdxxx = (req, res) => {
  const idPropietario = req.params.id;
  Interes.findAll({
    where: { usuarios_idUsuarios: idPropietario },
    include: [{ model: Articulo, attributes: ["usuarios_idUsuarios"] }],
  })
    .then((item) => res.status(200).json({ ok: true, data: item }))
    .catch((err) => res.status(400).json({ ok: false, msg: err.message }));
};

const getInteresByUsuarioId = (req, res) => {
  const idPropietario = req.params.id;
  Interes.findAll({
    include: [{ model: Articulo }, { model: Usuario }],
    nest: true,
    raw: true,
  })
    .then((items) => {
      //console.log(items);
      return items.filter((e) => e.Articulo.usuarios_idUsuarios == idPropietario);
    })
    .then((item) => res.status(200).json({ ok: true, data: item }))
    .catch((err) => res.status(400).json({ ok: false, msg: err.message }));
};

////obtener por el id de receptor: usuarios_id

const getInteresByInteresado = (req, res) => {
  const idInteresado = req.params.id;
  Interes.findAll({
    where: { usuarios_id: idInteresado },
    include: [{ model: Articulo, include: [{ model: Usuario }] }, { model: Usuario }],
  })
    .then((item) => res.status(200).json({ ok: true, data: item }))
    .catch((err) => res.status(400).json({ ok: false, msg: err.message }));
};

///POST NUEVA NECESIDAD/////////////////////
const nuevoInteres = (req, res) => {
  const interes = {
    mensaje: req.body.mensaje,
    /////la fecha se crea automáticamente////
    articulos_id: req.body.articulos_id,
    usuarios_id: req.body.usuarios_id, /// id del interesado
    asunto: req.body.asunto,
  };
  console.log(interes);
  Interes.create(interes)
    .then((a) => res.json({ ok: true, interes: a }))
    .catch((error) => res.json({ ok: false, err: error }));
};

//ON UPDATE/////////////////////////////////
const updateInteres = (req, res) => {
  const idABuscar = req.params.id;

  Interes.findOne({
    where: {
      id: idABuscar,
    },
  })
    .then((fo) => fo.update(req.body))
    .then(() => res.json({ ok: true }))
    .catch((error) => res.json({ ok: false, err: error }));
};

///ON DELETE///////////////////////////////////////
const deleteInteres = (req, res) => {
  const idABuscar = req.params.id;

  Interes.destroy({
    where: {
      id: idABuscar,
    },
  })
    .then((lista) => res.status(200).json({ ok: true }))
    .catch((err) => res.status(400).json({ ok: false, error: err.parent.sqlMessage }));
};

module.exports = { getInteresByUsuarioId, listaInteres, nuevoInteres, updateInteres, deleteInteres, getInteresById, getInteresByInteresado };
