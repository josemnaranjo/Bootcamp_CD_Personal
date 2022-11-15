const pokemonController = require('../controllers/pokemon.controller');
const notasController = require('../controllers/notas.controller');
const UserController = require('../controllers/use.controller');

module.exports = app =>{

    //USUARIOS
    app.post('/api/register',UserController.Register);
    app.get('/api/users/',UserController.getAll);
    app.post('/api/login',UserController.Login);
    app.post('/api/logout',UserController.Logout);


    //POKEMONES
    app.post('/api/create-pokemon',pokemonController.createPokemonWithNotes);
    app.get('/api',pokemonController.catchThemAll);
    app.delete('/api/:id',pokemonController.deletePokemon);
    app.put('/api/edit-pokemon/:id',pokemonController.updatePokemon);
    app.get('/api/:id',pokemonController.findOnePokemon);


    //NOTAS
    app.post('/api/create-note/:id',notasController.createNota);
    app.get('/api/notes/:idPokemon',notasController.getNoteFromPokemon);

}