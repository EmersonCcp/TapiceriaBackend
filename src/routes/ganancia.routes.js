const gananciaController = require('../controllers/ganancia.controller');

module.exports = (app) => {
    app.get('/ganancia/list', gananciaController.listarGananciaController);
    app.post('/ganancia/create', gananciaController.crearGananciaController);
    app.put('/ganancia/update', gananciaController.actualizarGananciaController);
    app.delete('/ganancia/remove/:id', gananciaController.eliminarGananciaController);
}