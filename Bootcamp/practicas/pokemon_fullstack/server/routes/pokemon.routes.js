const pokemonController = require('../controllers/pokemon.controller');
const notasController = require('../controllers/notas.controller');
const UserController = require('../controllers/use.controller');
const authenticate = require('../config/authenticate');

module.exports = app =>{

    //USUARIOS
    app.post('/api/register',UserController.Register);
    app.get('/api/users/',authenticate,UserController.getAll);
    app.post('/api/login',UserController.Login);
    app.post('/api/logout',UserController.Logout);
    app.get('/api/user/:id', UserController.getUser);


    //POKEMONES
    app.post('/api/create-pokemon', pokemonController.createPokemonWithNotes);
    app.get('/api', pokemonController.catchThemAll);
    app.delete('/api/:id',authenticate, pokemonController.deletePokemon);
    app.put('/api/edit-pokemon/:id',authenticate, pokemonController.updatePokemon);
    app.get('/api/:id',authenticate, pokemonController.findOnePokemon);


    //NOTAS
    app.post('/api/create-note/:id',authenticate, notasController.createNota);
    app.get('/api/notes/:idPokemon',authenticate, notasController.getNoteFromPokemon);

}