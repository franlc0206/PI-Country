const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  return sequelize.define('activity', {
    name: {
      type: DataTypes.STRING,
    },
    difficulty: {
        type: DataTypes.ENUM('1', '2', '3', '4', '5'),
    },
    duration: {
        type: DataTypes.STRING,
    },
    season: {
        type: DataTypes.ENUM('Spring', 'Summer', 'Autumn', 'Winter'),
    }
  });
};
