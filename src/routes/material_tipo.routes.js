const materialTipoController = require('../controllers/material_tipo.controller');

module.exports = (app) => {
    app.get('/material_tipo/list', materialTipoController.listarMaterialTiposController);
}