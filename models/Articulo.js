module.exports = (sequelize, DataTypes) => {
  const Articulo = sequelize.define(
    "Articulo",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      nombre: DataTypes.STRING,
      descripcion: DataTypes.STRING,
      foto: DataTypes.STRING,
      usuarios_idUsuarios: DataTypes.INTEGER, //foreign KEY
      categorias_idCategorias: DataTypes.INTEGER, ///foreign KEY
      receptor_id: DataTypes.INTEGER,
    },
    { tableName: "articulos", timestamps: false }
  );

  return Articulo;
};
