const travelController = require('./controllers/travels.controller');

module.exports = app =>{
    app.post('/api/travel',travelController.addTravel);
}