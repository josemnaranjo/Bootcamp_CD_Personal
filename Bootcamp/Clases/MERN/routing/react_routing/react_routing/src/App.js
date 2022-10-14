
import './App.css';
import CharactersList from './Views/CharactersList/CharactersList';
import {Routes, Route, Outlet, Link } from "react-router-dom";
import Character from './Components/Character/Character';

function App() {
  return (
    <div className="App">
            <Routes>
                <Route path='/home' element={<CharactersList/>}/>

                <Route path='/personaje/:id' element={Character}/>
            </Routes>  

    </div>
  );
}

export default App;
