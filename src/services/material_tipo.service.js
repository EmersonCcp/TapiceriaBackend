const {sequelize} = require('./bd.service');
const  {MaterialTipoModel}  = require('../models/material_tipo');

const listarMaterialTipoService = async (query, pageStart = 0, pageLimit = 10) => {
   
    const materialTipoModelResults = await MaterialTipoModel.findAll({
     order: [
       ['mt_nombre', 'ASC']
     ]
    });
 
    const materialTipoArray = new Array();
    for (let i = 0; i < materialTipoModelResults.length; i++) {
        const materialResult = materialTipoModelResults[i];
        materialTipoArray.push(materialResult.dataValues);
    }
    return materialTipoArray;
 }

 module.exports = {
    listarMaterialTipoService
 }