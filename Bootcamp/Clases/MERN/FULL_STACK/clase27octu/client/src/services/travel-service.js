import axios from 'axios';


export const createTravel = (travel)=>{
    const newTravel = axios.post('http://localhost:8000/api/travel',travel)
    return newTravel
}

export const getAllTravels = ()=> axios.get('http://localhost:8000/api/travel')

export const deleteTravel = (id)=> axios.delete('http://localhost:8000/api/travel/'+id)

export const updateTravel = (id)=> axios.put('http://localhost:8000/api/travel/'+id)

export const getTravel = (id)=> axios.get('http://localhost:8000/api/travel/'+id)

