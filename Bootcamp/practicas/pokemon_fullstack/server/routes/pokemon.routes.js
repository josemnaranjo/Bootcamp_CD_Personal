const pokemonController = require('../controllers/pokemon.controller');


module.exports = app =>{
    app.post('/api/create-pokemon',pokemonController.createPokemon);
    app.get('/api',pokemonController.catchThemAll);
    app.delete('/api/:id',pokemonController.deletePokemon);
    app.put('/api/:id',pokemonController.updatePokemon);
    app.get('/api/:id',pokemonController.findOnePokemon)
}