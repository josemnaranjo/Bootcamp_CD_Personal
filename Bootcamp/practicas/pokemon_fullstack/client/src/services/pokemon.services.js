import axios from 'axios';

export const getPokemons = async ()=> await axios.get('http://localhost:8000/api');

export const createPokemon = async (pokemon)=> await axios.post('http://localhost:8000/api/create-pokemon',pokemon);

export const updatePokemon = async (pokemon, id) => await axios.put(`http://localhost:8000/api/edit-pokemon/${id}`,pokemon);

export const findOnePokemon = async (id)=> await axios.get(`http://localhost:8000/api/${id}`);

export const deletePokemon = async (id)=> await axios.delete(`http://localhost:8000/api/${id}`);





