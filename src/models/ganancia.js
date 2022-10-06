const { DataTypes } = require('sequelize');
const {sequelize} = require('../services/bd.service');

const GananciaModel = sequelize.define('Ganancia', {
  // Model attributes are defined here
  gan_codigo: {
    type: DataTypes.INTEGER,
    allowNull: true,
    primaryKey: true,
    autoIncrement: true
  },
  gan_descripcion: {
    type: DataTypes.STRING,
    allowNull: false
    // allowNull defaults to true
  },
  gan_monto: {
    type: DataTypes.DOUBLE,
    allowNull: false
    // allowNull defaults to true
  }
}, {
  // Other model options go here
  tableName: 'ganancias',
  timestamps: false
});

module.exports = {
  GananciaModel
};