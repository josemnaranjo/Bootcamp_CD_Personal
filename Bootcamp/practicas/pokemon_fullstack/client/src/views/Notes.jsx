import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useParams } from 'react-router-dom';
import { findOnePokemon, getNotesFromPokemon } from '../services/pokemon.services';

const Notes = () => {
    const {id}= useParams();
    const [pokemon,setPokemon]=useState();
    const [notas,setNotas]= useState([]);




    const getPokemonFromService = async ()=>{
        const pkm = await findOnePokemon(id);
        setPokemon(pkm.data)
    }

    const getNotesFromService = async ()=>{
        const notes = await getNotesFromPokemon(id);
        console.log(notes.data.notas);
        if(notes.data.message===""){
            setNotas(notes.data.notas)
        }
    }

    useEffect(() => {
        getPokemonFromService();
    }, []);

    useEffect(() => {
        if(pokemon){
            getNotesFromService()
        }
    }, [pokemon]);


    return (
        <div>
            <Navbar bg='light'>
                <Container>
                    <Navbar.Brand href='/'>PokeApp</Navbar.Brand>
                </Container>
            </Navbar>
            <div>
                <h1>{pokemon?.pokemon}</h1>
                <h2>{pokemon?.entrenador}</h2>
            </div>
            
            <div className='container-notas'>
                <h1>Comentarios de otros entreandores</h1>
                {notas.map((nota,i)=>(
                    <div className='nota' key={i}>
                        <p>{nota.comentario}</p>
                        <p>{nota.rating}</p>
                        <p>{nota.nombreCreador}</p>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Notes;
