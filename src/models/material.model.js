const { DataTypes } = require('sequelize');
const {sequelize} = require('../services/bd.service');

const MaterialModel = sequelize.define('Material', {
  // Model attributes are defined here
  ma_codigo: {
    type: DataTypes.INTEGER,
    allowNull: true,
    primaryKey: true,
    autoIncrement: true
  },
  ma_nombre: {
    type: DataTypes.STRING,
    allowNull: false
    // allowNull defaults to true
  },
  ma_precio_unitario: {
    type: DataTypes.INTEGER,
    allowNull: false
    // allowNull defaults to true
  },
  ma_cantidad: {
    type: DataTypes.DECIMAL,
    allowNull: false
    // allowNull defaults to true
  },
  ma_precio_total: {
    type: DataTypes.DECIMAL,
    allowNull: false
    // allowNull defaults to true
  },
  ma_fecha_compra: {
    type: DataTypes.STRING,
    allowNull: false
    // allowNull defaults to true
  },
  fk_proveedor: {
    type: DataTypes.INTEGER,
    allowNull: false
    // allowNull defaults to true
  },
  fk_tipo_material: {
    type: DataTypes.INTEGER,
    allowNull: false
    // allowNull defaults to true
  }
}, {
  // Other model options go here
  tableName: 'materiales',
  timestamps: false
});

module.exports = {
  MaterialModel
};