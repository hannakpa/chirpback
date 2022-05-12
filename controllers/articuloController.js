const { Articulo, Categoria, Usuario, Interes, Distrito } = require("../models/index");

const multer = require("multer");
//defino las funciones que voy a exportar a routes:

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/fotoArticulos");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage }).single("file");

const listaArticulo = (req, res) => {
  let relacion = { include: [{ model: Categoria }, { model: Usuario, include: { model: Distrito } }, { model: Usuario, as: "receptor" }] };
  Articulo.findAll(relacion)
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

/// nuevo articulo. incluye foto
const nuevoArticulo = (req, res) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }

    if (!req.file || !req.body.categoria_id) {
      res.status(400).json({ ok: false, error: "Datos incompletos" });
    } else {
      const articulo = {
        foto: req.file.filename,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        categorias_idCategorias: req.body.categoria_id,
        usuarios_idUsuarios: req.body.usuario_id,
        //receptor_id: req.body.receptor_id,
      };

      Articulo.create(articulo)
        .then((a) => res.json({ ok: true, articulo: a }))
        .catch((e) => res.json({ ok: false, error: e }));
    }
  });
};

///Get articulo pasando el id////

const getById = (req, res) => {
  const idArticulo = req.params.id;
  Articulo.findOne({ where: { id: idArticulo }, include: [{ model: Categoria }, { model: Usuario }, { model: Usuario, as: "receptor" }] })
    .then((item) => res.status(200).json({ ok: true, data: item }))
    .catch((err) => res.status(400).json({ ok: false, msg: err }));
};

//ON UPDATE/////////////////////////////////
// const updateReceptor = (req, res) => {
//   const receptor_id = req.body;
//   console.log("body", req.body);

//   Articulo.findOne({
//     where: { receptor_id },
//     include: [{ model: Categoria }, { model: Usuario }],
//   })
//     .then((item) => res.status(200).json({ ok: true, data: item }))
//     .catch((err) => res.status(400).json({ ok: false, msg: err }));
// };

/// nuevo articulo. incluye foto/////////////////
const updateArticulo = (req, res) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }

    const idABuscar = req.params.id;

    const articulo = {
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      categorias_idCategorias: req.body.categoria_id,
      usuarios_idUsuarios: req.body.usuario_id,
      receptor_id: req.body.receptor_id,
    };
    // https://parzibyte.me/blog/2020/08/09/update-sequelize/

    if (req.file) {
      articulo.foto = req.file.filename;
    }

    Articulo.findOne({
      where: {
        id: idABuscar,
      },
    })
      .then((fo) => fo.update(articulo))
      .then(() => res.json({ ok: true }))
      .catch((error) => res.json({ ok: false, err: error }));
  });
};

////UPDATE RECEPTOR//////////
const updateReceptor = (req, res) => {
  const idABuscar = req.params.id;

  Articulo.findOne({
    where: {
      id: idABuscar,
    },
  })
    .then((fo) => fo.update(req.body.receptor_id))
    .then(() => res.json({ ok: true }))
    .catch((error) => res.json({ ok: false, err: error }));
};

///ON DELETE///////////////////////////////////////
// const deleteArticulo = (req, res) => {
//   let idABorrar = req.params.id;
//   Articulo.destroy({ where: { id: idABorrar } })
//     .then((item) => res.json({ ok: true, data: item }))
//     .catch((err) => res.json({ ok: false, error: err }));
// };

/////busca en la tabla articulos a los articulos del usuario autenticado y hace un map para buscar los que estén en la tabla de intereses///////////
const getbyInteres = (req, res) => {
  const idUser = req.params.id;
  Articulo.findAll({
    where: {
      usuarios_idUsuarios: idUser, ////id del usuario
    },
  })
    .then((articulo) => {
      const articulos = articulo.map((el) => el.id); ///extrae todos los art'iculos subidos por el usuario autenticado

      Interes.findAll({
        where: {
          articulos_id: articulos, /////busca en la tabla intereses a todos los art'iculos que coincidan con los de la tabla de art'iculos de usuarios.
        },
      });
    })
    .then((x) => res.json({ ok: true, data: x }))
    .catch((err) => res.json({ ok: true, data: err }));
};

const deleteArticulo = (req, res) => {
  const idABuscar = req.params.id;

  Articulo.destroy({
    where: {
      id: idABuscar,
    },
  })
    .then((lista) => res.status(200).json({ ok: true }))
    .catch((err) => res.status(400).json({ ok: false, error: err.parent.sqlMessage }));
};

module.exports = { listaArticulo, nuevoArticulo, getById, deleteArticulo, updateArticulo, updateReceptor, getbyInteres };
