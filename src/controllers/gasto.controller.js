const gastoServices = require('../services/gasto.service');

const  listarGastoController = async (req,res) => {
    
    const gasto = await gastoServices.listarGastosService(req.query.q);
    //console.log(personas);
    res.send({
        gasto
    });  
}

const crearGastoController = async (req,res) => {
    const gasto = await gastoServices.crearGastoService(req.body);
    res.status(202).send({
        success: true,
        gasto
    });
}

const actualizarGastoController = async (req, res) => {
    const gasto = await gastoServices.actualizarGastoService(req.body);
    res.status(202).send({
      success: true,
      gasto
    });
  };

const eliminarGastoController = async (req,res) => {
    const gasto = await gastoServices.eliminarGastoService(req.params.id);
    res.status(202).send({
        success: true,
        gasto
      });
}

module.exports = {
    listarGastoController, crearGastoController, actualizarGastoController, eliminarGastoController
}