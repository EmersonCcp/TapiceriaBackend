const proveedorController = require('../controllers/proveedor.controller');

module.exports = (app) => {
    app.get('/proveedor/list', proveedorController.listarProveedorController);
    app.get('/proveedor/listCount', proveedorController.cantidadProveedoresController);
}