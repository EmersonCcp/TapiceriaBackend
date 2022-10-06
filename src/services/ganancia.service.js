const {sequelize} = require('./bd.service');
const  {GananciaModel}  = require('../models/ganancia');

const listarGananciaService = async (query, pageStart = 0, pageLimit = 10) => {
   
    const gananciaModelResults = await GananciaModel.findAll({
     order: [
       ['gan_codigo', 'ASC']
     ]
    });
 
    const gananciaArray = new Array();
    for (let i = 0; i < gananciaModelResults.length; i++) {
        const gananciaResult = gananciaModelResults[i];
        gananciaArray.push(gananciaResult.dataValues);
    }
    return gananciaArray;
 }

 const crearGanaciaService = async (data) => {
  //Guardar el data en la BD
  const gananciaModelResult = await GananciaModel.create(data);
  if (gananciaModelResult) {
    return gananciaModelResult.dataValues;
  } else {
    return null;
  }
}

const actualizarGananciaService = async (data) => {
  const gananciaModelCount = await GananciaModel.update(data, {
    where: {
      gan_codigo: data.gan_codigo
    },
  });

  if (gananciaModelCount > 0) {
    const gananciaModelResult = await GananciaModel.findByPk(data.gan_codigo);
    return gananciaModelResult.dataValues;
  } else {
    return null;
  }
}

const eliminarGananciaService = async (gan_codigo) => {
  //eliminar el data en la BD
const gananciaModelCount = await GananciaModel.destroy({
  where: {
    gan_codigo
  }
});
if (gananciaModelCount > 0) {
  return true;
}
}

 module.exports = {
    listarGananciaService, crearGanaciaService, actualizarGananciaService, eliminarGananciaService
 }