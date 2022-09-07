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

 module.exports = {
    listarProveedoresService
 }