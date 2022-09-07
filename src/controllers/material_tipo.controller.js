const materialTiposServices = require('../services/material_tipo.service');

const  listarMaterialTiposController = async (req,res) => {
    
    const material_tipos = await materialTiposServices.listarMaterialTipoService(req.query.q);
    //console.log(personas);
    res.send({
        material_tipos
    });
    
}

module.exports = {
    listarMaterialTiposController
}