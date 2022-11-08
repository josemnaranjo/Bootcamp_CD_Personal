
import './App.css';
import Main from './views/Main';
import {Routes, Route} from 'react-router-dom'
import PkmForm from './components/PkmForm'

function App() {

  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/create-pokemon' element={<PkmForm/>}/>
            <Route path='/edit-pokemon/:id' element={<PkmForm/>}/>
        </Routes>
    </div>
  );
}

export default App;
