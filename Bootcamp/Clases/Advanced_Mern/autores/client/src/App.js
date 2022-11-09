import './App.css';
import {Routes,Route} from 'react-router-dom';
import Main from './views/Main';
import AddAutores from './views/AddAutores';
import EditAutores from './views/EditAutores';



function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/api/new' element={<AddAutores/>}/>
            <Route path='/api/edit/:id' element={<EditAutores/>}/>
        </Routes>
    </div>
  );
}

export default App;
