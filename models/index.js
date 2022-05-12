"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js";
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.Articulo.belongsTo(db.Usuario, { foreignKey: "usuarios_idUsuarios" });

db.Articulo.belongsTo(db.Usuario, { as: "receptor", foreignKey: "receptor_id" });
db.Articulo.belongsTo(db.Categoria, { foreignKey: "categorias_idCategorias" });
db.Categoria.hasMany(db.Articulo, { foreignKey: "categorias_idCategorias" });
db.Categoria.hasMany(db.Necesidad, { foreignKey: "categorias_id" }); //necesito?

db.Usuario.hasMany(db.Necesidad, { foreignKey: "usuarios_idUsuarios" });
db.Usuario.hasMany(db.Articulo, { foreignKey: "usuarios_idUsuarios" });
db.Usuario.belongsTo(db.Distrito, { foreignKey: "distrito_id" });
db.Distrito.hasMany(db.Usuario, { foreignKey: "distrito_id" });
db.Necesidad.belongsTo(db.Usuario, { foreignKey: "usuarios_idUsuarios" });
db.Necesidad.belongsTo(db.Categoria, { foreignKey: "categorias_id" });

///tabla intereses
db.Interes.belongsTo(db.Usuario, { foreignKey: "usuarios_id" });
//db.Usuario.hasMany(db.Interes, { foreignKey: "usuarios_id" });  //// CUANDO LO APLICO ME DA FALLO!!!

db.Interes.belongsTo(db.Articulo, { foreignKey: "articulos_id" });
//db.Articulo.hasMany(db.Necesidad, { foreignKey: "articulos_id" }); ////// CUANDO LO APLICO ME DA FALLO!!!

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
