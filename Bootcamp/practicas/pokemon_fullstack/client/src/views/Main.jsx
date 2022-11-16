import React,{useState,useEffect} from 'react';
import { deletePokemon, getPokemons, logout } from '../services/pokemon.services';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useUser } from '../contexts/userContext';



const Main = () => {
    const {user,setUser} = useUser();

    const renderInfo = () =>{
        if(user){
            return (<>Bienvenido: {user.firstName} {user.lastName}</>)
        }else{
            return (<>No hay usuario loggeado</>)
        }
    }

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

    const toEditPkm = (id) =>{
        navigate('/edit-pokemon/'+id)
    }
    const toEditNotes = (id)=>{
        navigate('/create-note/'+id)
    }

    const toSeeNotes =(id)=>{
        navigate('/api/'+id)
    }

    useEffect(() => {
        getAllPokemonsFromService()
    }, []);

    const logOut = async() =>{
        const {success} = await logout();
        if(success) setUser(null)
        else window.alert("Error. No se pudo cerrar la sesión")
    }

    return (
        <div>
            <h3>{renderInfo()}</h3>
            {user && <button onClick={logOut}>LOGOUT</button>}
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
                            <Button variant='secondary' onClick={()=>toEditPkm(pokemon._id)}>Editar Pokemon</Button>
                            <Button variant='secondary' onClick={()=>toEditNotes(pokemon._id)}>Añadir Notas</Button>
                            <Button variant='secondary' onClick={()=>toSeeNotes(pokemon._id)}>Ver Notas</Button>
                        </td>
                    </tr>))}
                </tbody>
            </Table>
            
        </div>
    );
}

export default Main;
