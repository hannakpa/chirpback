const { Usuario, Distrito } = require("../models/index");
const jsonwebtoken = require("jsonwebtoken");
//defino las funciones que voy a exportar a routes:

const multer = require("multer");
//defino las funciones que voy a exportar a routes:

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/fotoPerfiles");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage }).single("file");

const listaUsuario = (req, res) => {
  let relacion = { include: [{ model: Distrito }] };
  Usuario.findAll(relacion)
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

const loginUsuario = (req, res) => {
  const response = {};
  const { email, password } = req.body; //estoy definiendo el contenido del cuerpo que se enviar'a.

  /////////////COMPARACION DE LO QUE ENVIO CON LO QUE HAY. TODO IRA BIEN SOLO SI LOS DATOS DE REQ COINCIDEN CON AGUN CAMPO DE LA TABLA DE LA BD.

  ///primero que todo comprueba que no falte ni el email ni el password.//////////
  if (!email || !password) {
    //si no encuentra el email o el password, entonces... (no )
    return res ///devolver esta respuesta
      .status(400) //el tipo de error
      .json({ ok: false, msg: "email o pass no encontrados" }); ///este mensaje en formato .json
  } ////////rermina la comprobacion de existencia///////////

  // QUERY
  Usuario.findOne({ where: { email }, include: [Distrito] }) ///en la tabla usuarios busca el campo email.
    ////1er paso
    .then((usuario) => {
      console.log(usuario);
      //cogemos el usuario

      if (password == usuario.password) {
        //si existe el usuario y el valor del password coincide con el indicado en la tabla,
        return usuario; ///devolver usuario
      } else {
        throw "El password es incorrecto"; //sino devolver error
      }
    })
    ///2do paso
    .then((usuario) => {
      console.log(usuario);
      response.token = jsonwebtoken.sign(
        //
        {
          id: usuario.id,
          email,
          nombre: usuario.nombre,
          apellidos: usuario.apellidos,
          telefono: usuario.telefono,
          informacion: usuario.informacion,
          foto: usuario.foto,
          distrito: usuario.Distrito, //COMPROBAR SI COGE EL ID DEL DISTRITO
          ptospositivos: usuario.ptospositivos,
          ptosnegativos: usuario.ptosnegativos,
        },
        "secretKey"
      );
      response.ok = true;
      res.json(response);
    })
    .catch((error) => {
      res.status(400).json({
        ok: false,
        msg: error,
      });
    });
};

const getById = (req, res) => {
  const idABuscar = req.params.id;
  Usuario.findOne({ where: { id: idABuscar }, include: [Distrito] })
    .then((datos) => {
      delete datos.password;
      res.status(200).json({ ok: true, data: datos });
    })
    .catch((err) => res.status(400).json({ ok: false, msg: err }));
};

/////////ON UPDATE///////////
const updatePerfil = (req, res) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }

    const idABuscar = req.params.id;

    const perfil = {
      nombre: req.body.nombre,
      apellidos: req.body.apellidos,
      email: req.body.email,
      telefono: req.body.telefono,
      informacion: req.body.informacion,
      distrito_id: req.distrito_id,
    };
    // https://parzibyte.me/blog/2020/08/09/update-sequelize/

    if (req.file) {
      perfil.foto = req.file.filename;
    }

    Usuario.findOne({
      where: {
        id: idABuscar,
      },
      include: [Distrito],
    })
      .then((fo) => {
        fo.update(perfil);
        return fo;
      })
      .then((fo) => {
        let token = jsonwebtoken.sign(
          {
            id: fo.id,
            email: perfil.email,
            nombre: perfil.nombre,
            apellidos: perfil.apellidos,
            telefono: perfil.telefono,
            /////no actualiza la informaci'on//////
            informacion: perfil.informacion ?? fo.informacion,
            foto: perfil.foto ? perfil.foto : fo.foto,
            distrito: fo.Distrito, //COMPROBAR SI COGE EL ID DEL DISTRITO
            ptospositivos: fo.ptospositivos,
            ptosnegativos: fo.ptosnegativos,
          },
          "secretKey"
        );

        res.json({ ok: true, token });
      })
      .catch((error) => res.json({ ok: false, err: error }));
  });
};

module.exports = { loginUsuario, listaUsuario, getById, updatePerfil };
