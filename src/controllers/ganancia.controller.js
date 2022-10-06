const gananciaServices = require('../services/ganancia.service');

const  listarGananciaController = async (req,res) => {
    
    const ganancia = await gananciaServices.listarGananciaService(req.query.q);
    //console.log(personas);
    res.send({
        ganancia
    });
    
}

const crearGananciaController = async (req,res) => {
    const ganancia = await gananciaServices.crearGanaciaService(req.body);
    res.status(202).send({
        success: true,
        ganancia
    });
}

const actualizarGananciaController = async (req, res) => {
    const ganancia = await gananciaServices.actualizarGananciaService(req.body);
    res.status(202).send({
      success: true,
      ganancia,
    });
  };

const eliminarGananciaController = async (req,res) => {
    const ganancia = await gananciaServices.eliminarGananciaService(req.params.id);
    res.status(202).send({
        success: true,
        ganancia
      });
}

module.exports = {
    listarGananciaController, crearGananciaController,actualizarGananciaController, eliminarGananciaController
}