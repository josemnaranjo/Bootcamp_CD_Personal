
import './App.css';
import Main from './views/Main';
import {Routes, Route} from 'react-router-dom'
import PkmForm from './components/PkmForm'
import UpdatePkm from './views/UpdatePkm';
import CreatePkm from './views/CreatePkm';

function App() {

  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/create-pokemon' element={<CreatePkm/>}/>
            <Route path='/edit-pokemon/:id' element={<UpdatePkm/>}/>
        </Routes>
    </div>
  );
}

export default App;
