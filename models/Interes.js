module.exports = (sequelize, DataTypes) => {
  const Interes = sequelize.define(
    "Interes",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      mensaje: DataTypes.STRING,
      fecha: DataTypes.DATE,
      articulos_id: DataTypes.INTEGER, //foreign KEY
      usuarios_id: DataTypes.INTEGER, ///foreign KEY
      asunto: DataTypes.STRING,
    },
    { tableName: "intereses", timestamps: false }
  );

  return Interes;
};
