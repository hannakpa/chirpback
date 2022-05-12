const express = require("express"); ///forma de importa como import from, pero al estilo de sequelize.
const cors = require("cors");
const app = express(); ///defino que voy a usar express.
const endpointsUsuarios = require("./routes/usuarioRoutes.js");
const endpointsArticulos = require("./routes/articuloRoutes.js");
const endpointsCategorias = require("./routes/categoriaRoutes.js");
const endpointsDistritos = require("./routes/distritoRoutes.js");
const endpointsNecesidades = require("./routes/necesidadRoutes.js");
const endpointsIntereses = require("./routes/interesRoutes.js");

app.use(express.json()); //hace que acepte el formato json. sino no aceptaria nada
app.use(cors()); //evita problemas al conectar desde otro servidor
app.use("/api/usuarios", endpointsUsuarios); //luego en el controlador definire esta funcion de registroUsuario, le dar'e la rutaque quiera /ruta y la exportar'e.
//la ruta sera: http://localhost:4000/fotopris/api/usuarios/ + la ruta que defina para loginUsuario (en usuarioRoutes)
app.use("/img", express.static("uploads"));
app.use("/api/articulos", endpointsArticulos);
app.use("/api/categorias", endpointsCategorias);
app.use("/api/distritos", endpointsDistritos); ///CUIDADO. la tabla en la bD se llama distrito, en singular.
app.use("/api/necesidades", endpointsNecesidades);
//app.use("/api/usuariosDistritos", endpointsUsuariosDistritos); //CUIDADO. en la tabla es todo en minusculas.
app.use("/api/intereses", endpointsIntereses);

//arranque del servidor
const port = 4000;
app.listen(port, () => console.log(`Express en puerto ${port}!`));
