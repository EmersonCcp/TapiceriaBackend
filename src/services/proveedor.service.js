const {sequelize} = require('./bd.service');
const  {ProveedorModel}  = require('../models/proveedor');

const listarProveedoresService = async (query, pageStart = 0, pageLimit = 10) => {
   
    const proveedorModelResults = await ProveedorModel.findAll({
     order: [
       ['pro_nombre', 'ASC']
     ]
    });
 
    const proveedorArray = new Array();
    for (let i = 0; i < proveedorModelResults.length; i++) {
        const proveedorResult = proveedorModelResults[i];
        proveedorArray.push(proveedorResult.dataValues);
    }
    return proveedorArray;
 }

 const cantidadProveedoresService = async (query, pageStart = 0, pageLimit = 10) => {
  //Buscar en la BD por codigo
  const proveedoresModelResult = await ProveedorModel.count();
  return proveedoresModelResult;
}

 module.exports = {
    listarProveedoresService, cantidadProveedoresService
 }