const FkController = require('./controllers/fk.controller');


module.exports = app => {
    app.post('/api',FkController.createUser);
}