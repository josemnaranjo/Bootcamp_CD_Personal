import axios from 'axios'

export const getAllAutores = async()=> await axios.get('http://localhost:8000/');

export const createAutor = async(nombreAutor) =>  await axios.post('http://localhost:8000/api/new',nombreAutor);

export const getOneAutor = async(id)=> await axios.get(`http://localhost:8000/api/find-one/${id}`);

export const updateAutor = async(id,nombreAutor)=> await axios.put(`http://localhost:8000/api/edit/${id}`,nombreAutor);

export const deleteAutor = async(id)=> await axios.delete(`http://localhost:8000/api/delete/${id}`);

