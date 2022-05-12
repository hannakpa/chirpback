const express = require("express");
//const { route } = require("express/lib/router"); //LO NECESITO?
const { autentica, autError } = require("../middleware/middleware.js");

//para cuando tenga que hacer la autenticacion
//el middleware es para el login
// const {autentica, autError} = require("../middleware/middleware.js")

//Metodo que permite manejar las rutas.
const router = express.Router(); //metodo que permite manejar las rutas

const { loginUsuario, listaUsuario, getById, updatePerfil } = require("../controllers/usuarioController.js"); //importacion de todos los endpoints relacionados con el usuario desde el controlador.

///DEFINIR LAS RUTAS/ SE IMPORTARA SUS FUNCIONES DESDE EL CONTROLADOR, DEFINIDO ARRIBA.
router.post("/login", loginUsuario);
router.get("/", listaUsuario);
//para hacer la prueba en login tendre que poner la ruta en postman: http://localhost:4000/api/usuarios/login

router.get("/:id", getById);

router.post("/id", autentica);

//on update
router.put("/:id", updatePerfil);

//forma de exportar con sequelize
module.exports = router;
