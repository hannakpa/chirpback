const express = require("express");

const router = express.Router(); //metodo que permite manejar las rutas

const { listaCategoria } = require("../controllers/categoriaController.js"); //importacion de todos los endpoints relacionados

///DEFINIR LAS RUTAS/ SE IMPORTARA SUS FUNCIONES DESDE EL CONTROLADOR, DEFINIDO ARRIBA.

router.get("/", listaCategoria);
//para hacer la prueba tendre que poner la ruta: http://localhost:4000/api/categorias/

//forma de exportar con sequelize
module.exports = router;
