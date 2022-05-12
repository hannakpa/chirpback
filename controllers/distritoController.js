const { Distrito } = require("../models/index");

const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/fotoDistritos");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage }).single("file");

//defino las funciones que voy a exportar a routes:

const listaDistrito = (req, res) => {
  Distrito.findAll()
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

//OBTENER UN DISTRITO A PARTIR DE SU ID///
const getDistritoById = (req, res) => {
  const idNecesidad = req.params.id;
  Distrito.findOne({ where: { id: idNecesidad } })
    .then((item) => res.status(200).json({ ok: true, data: item }))
    .catch((err) => res.status(400).json({ ok: false, msg: err }));
};

module.exports = { listaDistrito, getDistritoById };
