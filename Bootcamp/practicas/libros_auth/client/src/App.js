import './App.css';
import {Routes,Route} from 'react-router-dom';
import Register from './views/Register';

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Register/>}/>
        </Routes>
      
    </div>
  );
}

export default App;
