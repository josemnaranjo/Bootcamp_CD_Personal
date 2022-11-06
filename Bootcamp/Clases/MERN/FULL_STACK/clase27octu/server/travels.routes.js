const travelController = require('./controllers/travels.controller');

module.exports = app =>{
    app.post('/api/travel',travelController.addTravel);
    app.get('/api/travel', travelController.getAllTravels);
    app.delete('/api/travel/:id',travelController.deleteTravel);
    app.put('/api/travel/:id',travelController.updateTravel);
    add.get('/api/travel/:id',travelController.getOneTravel);
}