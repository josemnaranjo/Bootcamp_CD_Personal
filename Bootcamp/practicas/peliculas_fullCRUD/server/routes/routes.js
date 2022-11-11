const peliculaController = require('../controllers/peliculas.controller');
const notasController = require('../controllers/notas.controller');

module.exports = app =>{

    //PELICULAS
    app.post('/api/new',peliculaController.createPelicula);
    app.get('/api',peliculaController.getAllPeliculas);
    // app.delete('/api/:id',peliculaController.deletePelicula);
    app.put('/api/edit-pelicula/:id',peliculaController.updatePelicula);
    app.get('/api/:id',peliculaController.findOnePelicula);


    //NOTAS
    app.post('/api/create-note/:id',notasController.createNota);
    app.get('/api/notes/:id',notasController.getNoteFromPelicula);
}