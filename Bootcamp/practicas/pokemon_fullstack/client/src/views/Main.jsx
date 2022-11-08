import React,{useState,useEffect} from 'react';
import { deletePokemon, getPokemons } from '../services/pokemon.services';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';



const Main = () => {
    const [pokemones,setPokemones]=useState([]);

    const navigate = useNavigate()

    const getAllPokemonsFromService = async()=>{
        try{
            const allPokemons =  await getPokemons();
            setPokemones(allPokemons.data)
        }catch(err){
            console.log(err)
        }
    }

    const deletePokemonFromService = async (id)=>{
        try{
            await deletePokemon(id)
            setPokemones(pokemones.filter(pokemon=>pokemon._id !==id))
        }catch(err){
            console.log(err)
        }
    }

    const toEdit = () =>{
        navigate('/create-pokemon')
    }

    useEffect(() => {
        getAllPokemonsFromService()
    }, []);

    return (
        <div>
            <Navbar bg='light'>
                <Container>
                    <Navbar.Brand href='/'>PokeApp</Navbar.Brand>
                        <Nav>
                            <Nav.Item >
                                <Nav.Link href='/create-pokemon'>Atrápalos ya!</Nav.Link>
                            </Nav.Item>
                        </Nav>
                </Container>
            </Navbar>
            <h1>Pokedex</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>
                            Pokemon
                        </th>
                        <th>
                            Entreandor
                        </th>
                        <th>
                            Tipo
                        </th>
                        <th>
                            Acciones
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {pokemones.map((pokemon,i)=>(
                    <tr key={i}>
                        <td>{pokemon.pokemon}</td>
                        <td>{pokemon.entrenador}</td>
                        <td>{pokemon.tipos[0]} {pokemon.tipos[1]} {pokemon.tipos[2]}</td>
                        <td>
                            <Button variant='danger' onClick={()=>deletePokemonFromService(pokemon._id)}>Liberar</Button> 
                            <Button variant='secondary' onClick={toEdit}>Editar</Button>
                        </td>
                    </tr>))}
                </tbody>
            </Table>
            
        </div>
    );
}

export default Main;
