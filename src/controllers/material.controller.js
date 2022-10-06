const materialServices = require('../services/material.service');

const listarMaterialController = async (req,res) => {
    
    const material = await materialServices.listarMaterialService(req.query.q);
    //console.log(personas);
    res.send({
        material
    });
}

const cantidadMaterialController = async (req,res) => {
    
    const material = await materialServices.cantidadMaterialesService(req.query.q);
    //console.log(personas);
    res.send(material[0]);
}

const  getByIdMaterialController = async (req,res) => {
    const material = await materialServices.getByIdMaterialService(req.params.id);
    let jsonResultado = req.query;
    jsonResultado['success'] = true;
    jsonResultado['material'] = material;
    res.status(201).send(jsonResultado);
}

const crearMaterialController = async (req,res) => {
    const material = await materialServices.crearMaterialService(req.body);
    res.status(202).send({
        success: true,
        material
    });
}

const actualizarMaterialController = async (req, res) => {
    const material = await materialServices.actualizarMaterialService(req.body);
    res.status(202).send({
      success: true,
      material,
    });
  };

const eliminarMaterialController = async (req,res) => {
    const material = await materialServices.eliminarMaterialService(req.params.id);
    res.status(202).send({
        success: true,
        material
      });
}

module.exports = {
    listarMaterialController, getByIdMaterialController, crearMaterialController,
     actualizarMaterialController,cantidadMaterialController, eliminarMaterialController
}