const { DataTypes } = require('sequelize');
const {sequelize} = require('../services/bd.service');

const MaterialTipoModel = sequelize.define('MaterialTipo', {
  // Model attributes are defined here
  mt_codigo: {
    type: DataTypes.INTEGER,
    allowNull: true,
    primaryKey: true,
    autoIncrement: true
  },
  mt_nombre: {
    type: DataTypes.STRING,
    allowNull: false
    // allowNull defaults to true
  }
}, {
  // Other model options go here
  tableName: 'material_tipo',
  timestamps: false
});

module.exports = {
  MaterialTipoModel
};
