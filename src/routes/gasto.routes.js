const gastoController = require('../controllers/gasto.controller');

module.exports = (app) => {
    app.get('/gasto/list', gastoController.listarGastoController);
    app.post('/gasto/create', gastoController.crearGastoController);
    app.put('/gasto/update', gastoController.actualizarGastoController);
    app.delete('/gasto/remove/:id', gastoController.eliminarGastoController);
}