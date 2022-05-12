module.exports = (sequelize, DataTypes) => {
  const Necesidad = sequelize.define(
    "Necesidad",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      nombre: DataTypes.STRING,
      descripcion: DataTypes.STRING,
      usuarios_idUsuarios: DataTypes.INTEGER, //foreign KEY
      categorias_id: DataTypes.INTEGER, ///foreign KEY
    },
    { tableName: "necesidades", timestamps: false }
  );

  return Necesidad;
};
