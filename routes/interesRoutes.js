const express = require("express");
//const { route } = require("express/lib/router"); //LO NECESITO?

//para cuando tenga que hacer la autenticacion
//el middleware es para el login
// const {autentica, autError} = require("../middleware/middleware.js")

//Metodo que permite manejar las rutas.
const router = express.Router(); //metodo que permite manejar las rutas

const { getInteresByUsuarioId, listaInteres, nuevoInteres, updateInteres, deleteInteres, getInteresById, getInteresByInteresado } = require("../controllers/interesController.js"); //importacion de todos los endpoints relacionados con el usuario desde el controlador.

///DEFINIR LAS RUTAS/ SE IMPORTARA SUS FUNCIONES DESDE EL CONTROLADOR, DEFINIDO ARRIBA.

router.get("/propietario/:id", getInteresByUsuarioId);

router.get("/interesado/:id", getInteresByInteresado);

router.get("/", listaInteres);
//para hacer la prueba en login tendre que poner la ruta en postman: http://localhost:4000/api/usuarios/login

router.post("/", nuevoInteres);

router.get("/:id", getInteresById);

//on update
router.put("/:id", updateInteres);

//on delete
router.delete("/:id", deleteInteres);

//forma de exportar con sequelize
module.exports = router;
