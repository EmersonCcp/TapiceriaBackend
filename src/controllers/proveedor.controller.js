const proveedorServices = require('../services/proveedor.service');

const  listarProveedorController = async (req,res) => {
    
    const proveedor = await proveedorServices.listarProveedoresService(req.query.q);
    //console.log(personas);
    res.send({
        proveedor
    });
    
}

module.exports = {
    listarProveedorController
}