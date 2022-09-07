const { DataTypes } = require('sequelize');
const {sequelize} = require('../services/bd.service');

const ProveedorModel = sequelize.define('Proveedor', {
  // Model attributes are defined here
  pro_codigo: {
    type: DataTypes.INTEGER,
    allowNull: true,
    primaryKey: true,
    autoIncrement: true
  },
  pro_nombre: {
    type: DataTypes.STRING,
    allowNull: false
    // allowNull defaults to true
  },
  pro_ruc: {
    type: DataTypes.STRING,
    allowNull: false
    // allowNull defaults to true
  },
  pro_direccion: {
    type: DataTypes.STRING,
    allowNull: false
    // allowNull defaults to true
  },
  pro_telefono: {
    type: DataTypes.STRING,
    allowNull: false
    // allowNull defaults to true
  }
}, {
  // Other model options go here
  tableName: 'proveedores',
  timestamps: false
});

module.exports = {
  ProveedorModel
};