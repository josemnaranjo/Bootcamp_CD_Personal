const AutoresController = require('../controllers/autores.controller');

module.exports = app =>{
    app.post('/api/new', AutoresController.create);
    app.get('/',AutoresController.findAll);
    app.get('/api/find-one/:id',AutoresController.findOne);
    app.put('/api/edit/:id',AutoresController.findOneAndUpdate);
    app.delete('/api/delete/:id',AutoresController.deleteOne);
}