module.exports = (sequelize, DataTypes) => {
  const Distrito = sequelize.define(
    "Distrito",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      nombre: DataTypes.STRING,
      foto: DataTypes.STRING,
    },
    { tableName: "distrito", timestamps: false }
  );

  return Distrito;
};
