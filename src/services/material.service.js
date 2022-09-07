const {sequelize} = require('./bd.service');
const  {MaterialModel}  = require('../models/material.model');

const listarMaterialService = async (query, pageStart = 0, pageLimit = 10) => {
   
    SSQL= "select m.ma_codigo, m.ma_nombre, m.ma_precio_unitario,m.ma_cantidad,m.ma_precio_total,m.ma_fecha_compra,mt.mt_nombre, p.pro_nombre from materiales m, material_tipo mt, proveedores p where mt.mt_codigo = m.fk_tipo_material and  p.pro_codigo = m.fk_proveedor order by m.ma_codigo";
    const materialesModelResults = sequelize.query(SSQL);
    return materialesModelResults;
 }

 const cantidadMaterialesService = async (query, pageStart = 0, pageLimit = 10) => {
    SSQL = "select count(*) from materiales";
    const materialesModelResults = sequelize.query(SSQL,{ type: sequelize.QueryTypes.SELECT });
    return materialesModelResults;
 }

 const getByIdMaterialService = async (ma_codigo) => {
  //Buscar en la BD por codigo
  const materialModelResult = await MaterialModel.findByPk(ma_codigo);
  if (materialModelResult) {
    return materialModelResult.dataValues;
  } else {
    return null;
  }
}

const crearMaterialService = async (data) => {
  //Guardar el data en la BD
  const materialModelResult = await MaterialModel.create(data);
  if (materialModelResult) {
    return materialModelResult.dataValues;
  } else {
    return null;
  }
}

const actualizarMaterialService = async (data) => {
  const materialModelCount = await MaterialModel.update(data, {
    where: {
      ma_codigo: data.ma_codigo,
    },
  });

  if (materialModelCount > 0) {
    const materialModelResult = await MaterialModel.findByPk(data.ma_codigo);
    return materialModelResult.dataValues;
  } else {
    return null;
  }
}

 module.exports = {
    listarMaterialService, getByIdMaterialService, crearMaterialService, actualizarMaterialService, cantidadMaterialesService
 }