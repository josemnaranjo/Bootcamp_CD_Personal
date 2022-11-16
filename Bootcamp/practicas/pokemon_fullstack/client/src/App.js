
import './App.css';
import Main from './views/Main';
import {Routes, Route, Link} from 'react-router-dom'
import UpdatePkm from './views/UpdatePkm';
import CreatePkm from './views/CreatePkm';
import AddNotas from './views/AddNotas';
import Notes from './views/Notes';
import Login from './views/Login';
import Register from './views/Register';
import {UserProvider} from './contexts/userContext'

function App() {

  return (
    <div className="App">
        <UserProvider>
            <ul>
                <li>
                    <Link to='/'>HOME</Link>
                </li>
                <li>
                    <Link to='/login'>LOGIN</Link>
                </li>
                <li>
                    <Link to='/register'>REGISTRO</Link>
                </li>
            </ul>
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/register' element={<Register/>}></Route>
                <Route path='/create-pokemon' element={<CreatePkm/>}/>
                <Route path='/edit-pokemon/:id' element={<UpdatePkm/>}/>
                <Route path='/create-note/:id' element={<AddNotas/>}/>
                <Route path='/api/:id' element={<Notes/>}/>
            </Routes>
        </UserProvider>
    </div>
  );
}

export default App;
