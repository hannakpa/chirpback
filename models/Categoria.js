module.exports = (sequelize, DataTypes) => {
  const Categoria = sequelize.define(
    "Categoria",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      nombre: DataTypes.STRING,
      icono: DataTypes.STRING,
    },
    { tableName: "categorias", timestamps: false }
  );

  return Categoria;
};
