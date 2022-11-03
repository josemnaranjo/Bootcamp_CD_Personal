const FkController = require('./controllers/fk.controller');


module.exports = app => {
    app.post('/api/new/create',FkController.createUser);
    app.get('/api/findAll',FkController.findAll);

}