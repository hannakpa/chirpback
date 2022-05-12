const { Categoria, Articulo, Necesidad } = require("../models/index");

const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/fotoCategorias");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage }).single("file");

//defino las funciones que voy a exportar a routes:

const listaCategoria = (req, res) => {
  Categoria.findAll({ include: [{ model: Articulo }, { model: Necesidad }] })
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

module.exports = { listaCategoria };
