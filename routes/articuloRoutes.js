const express = require("express");
//const { route } = require("express/lib/router"); //LO NECESITO?

//para cuando tenga que hacer la autenticacion
//el middleware es para el login
// const {autentica, autError} = require("../middleware/middleware.js")

//Metodo que permite manejar las rutas.
const router = express.Router(); //metodo que permite manejar las rutas

const { listaArticulo, nuevoArticulo, getById, deleteArticulo, updateArticulo, updateReceptor, getbyInteres } = require("../controllers/articuloController.js"); //importacion de todos los endpoints relacionados con el usuario desde el controlador.

///DEFINIR LAS RUTAS/ SE IMPORTARA SUS FUNCIONES DESDE EL CONTROLADOR, DEFINIDO ARRIBA.

router.get("/", listaArticulo);
//para hacer la prueba en login tendre que poner la ruta en postman: http://localhost:4000/api/usuarios/login

///para coger los datos de un único artículo
router.get("/:id", getById);

//on update con foto
router.put("/:id", updateArticulo);

router.put("/:id", updateReceptor);

///on delete
router.delete("/:id", deleteArticulo);

router.post("/", nuevoArticulo);

router.get("/byinteres/:id", getbyInteres);

//forma de exportar con sequelize
module.exports = router;
