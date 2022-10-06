const proveedorServices = require('../services/proveedor.service');

const  listarProveedorController = async (req,res) => {
    
    const proveedor = await proveedorServices.listarProveedoresService(req.query.q);
    //console.log(personas);
    res.send({
        proveedor
    });
}

const cantidadProveedoresController = async (req,res) => {
    
    const proveedores = await proveedorServices.cantidadProveedoresService(req.query.q);
    //console.log(personas);
    res.send({
        proveedores
    });
}

module.exports = {
    listarProveedorController, cantidadProveedoresController
}