module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define(
    "Usuario",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },

      nombre: DataTypes.STRING,
      apellidos: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      telefono: DataTypes.FLOAT,
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      telefono: DataTypes.FLOAT,
      informacion: DataTypes.STRING,
      foto: DataTypes.STRING,
      distrito_id: DataTypes.INTEGER,
      ptospositivos: DataTypes.FLOAT,
      ptosnegativos: DataTypes.FLOAT,
    },

    { tableName: "usuarios", timestamps: false }
  );

  return Usuario;
};
