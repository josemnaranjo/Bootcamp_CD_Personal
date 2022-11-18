import './App.css';
import {Routes,Route} from 'react-router-dom';
import Register from './views/Register';
import {UserProvider} from './context/useContext';
import Home from './views/Home';
import Login from './views/Login';

function App() {
  return (
    <div className="App">
        <UserProvider>
            <Routes>
                <Route path='/' element={<Register/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
            </Routes>
        </UserProvider>
    </div>
  );
}

export default App;
