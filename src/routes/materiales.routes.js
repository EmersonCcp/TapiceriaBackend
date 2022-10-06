const MaterialController = require('../controllers/material.controller');

module.exports = (app) => {
    app.get('/material/list', MaterialController.listarMaterialController);
    app.get('/material/listCount', MaterialController.cantidadMaterialController);
    app.get('/material/find/:id', MaterialController.getByIdMaterialController);
    app.post('/material/create', MaterialController.crearMaterialController);
    app.put('/material/update', MaterialController.actualizarMaterialController);
    app.delete('/material/remove/:id', MaterialController.eliminarMaterialController);
}