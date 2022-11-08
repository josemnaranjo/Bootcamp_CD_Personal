
import './App.css';
import Main from './views/Main';
import {Routes, Route} from 'react-router-dom'
import UpdatePkm from './views/UpdatePkm';
import CreatePkm from './views/CreatePkm';
import AddNotas from './views/AddNotas';
import Notes from './views/Notes';

function App() {

  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/create-pokemon' element={<CreatePkm/>}/>
            <Route path='/edit-pokemon/:id' element={<UpdatePkm/>}/>
            <Route path='/create-note/:id' element={<AddNotas/>}/>
            <Route path='/api/:id' element={<Notes/>}/>
        </Routes>
    </div>
  );
}

export default App;
