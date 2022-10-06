const { DataTypes } = require('sequelize');
const {sequelize} = require('../services/bd.service');

const GastoModel = sequelize.define('Gastos', {
  // Model attributes are defined here
  gas_codigo: {
    type: DataTypes.INTEGER,
    allowNull: true,
    primaryKey: true,
    autoIncrement: true
  },
  gas_descripcion: {
    type: DataTypes.STRING,
    allowNull: false
    // allowNull defaults to true
  },
  gas_monto: {
    type: DataTypes.DOUBLE,
    allowNull: false
    // allowNull defaults to true
  }
}, {
  // Other model options go here
  tableName: 'gastos',
  timestamps: false
});

module.exports = {
  GastoModel
};