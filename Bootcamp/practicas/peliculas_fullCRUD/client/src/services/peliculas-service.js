import axios from 'axios';


//PELICULAS

export const createPelicula = async (peliculaData) => await axios.post('http://localhost:8000/api/new',peliculaData);

export const getAllPeliculas = async()=> await axios.get('http://localhost:8000/api/');

export const getOnePelicula = async(id) => await axios.get(`http://localhost:8000/api/${id}`);

export const editOnePelicula = async(peliculaData,id) => await axios.put(`http://localhost:8000/api/edit-pelicula/${id}`,peliculaData);

//NOTAS

export const getNotaForAPelicula = async(id) => await axios.get(`http://localhost:8000/api/notes/${id}`);

export const createNota = async (notaData, id) => await axios.post(`http://localhost:8000/api/create-note/${id}`,notaData);
