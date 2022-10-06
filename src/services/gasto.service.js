const {sequelize} = require('./bd.service');
const  {GastoModel}  = require('../models/gasto');

const listarGastosService = async (query, pageStart = 0, pageLimit = 10) => {
   
    const gastosModelResults = await GastoModel.findAll({
     order: [
       ['gas_codigo', 'ASC']
     ]
    });
 
    const gastosArray = new Array();
    for (let i = 0; i < gastosModelResults.length; i++) {
        const gastosResult = gastosModelResults[i];
        gastosArray.push(gastosResult.dataValues);
    }
    return gastosArray;
 }

 const crearGastoService = async (data) => {
  //Guardar el data en la BD
  const gastoModelResult = await GastoModel.create(data);
  if (gastoModelResult) {
    return gastoModelResult.dataValues;
  } else {
    return null;
  }
}

const actualizarGastoService = async (data) => {
  const gastoModelCount = await GastoModel.update(data, {
    where: {
      gas_codigo: data.gas_codigo
    },
  });

  if (gastoModelCount > 0) {
    const gastoModelResult = await GastoModel.findByPk(data.gas_codigo);
    return gastoModelResult.dataValues;
  } else {
    return null;
  }
}

const eliminarGastoService = async (gas_codigo) => {
  //eliminar el data en la BD
const gastoModelCount = await GastoModel.destroy({
  where: {
    gas_codigo
  }
});
if (gastoModelCount > 0) {
  return true;
}
}

 module.exports = {
    listarGastosService, crearGastoService, actualizarGastoService, eliminarGastoService
 }