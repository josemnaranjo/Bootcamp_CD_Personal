const BookController =require('./controllers/validation.controller');

module.exports = app =>{
    app.post('/api/book/create', BookController.createBook); 
}