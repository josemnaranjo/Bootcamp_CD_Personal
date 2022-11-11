import './App.css';
import {Routes,Route} from 'react-router-dom';
import Main from './Views/Main';
import CrearPelicula from './Views/CrearPelicula';
import UpdatePelicula from './Views/UpdatePelicula';
import CrearNotas from './Views/CrearNotas';
import ShowNotas from './Views/ShowNotas';

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/new' element={<CrearPelicula/>}/>
            <Route path='/edit-pelicula/:id' element={<UpdatePelicula/>}/>
            <Route path='/new-nota/:id' element={<CrearNotas/>}/>
            <Route path='/notas/:id' element={<ShowNotas/>}/>
            
        </Routes>
    </div>
  );
}

export default App;
