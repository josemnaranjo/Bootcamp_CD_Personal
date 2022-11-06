import './App.css';
import Main from './views/Main'
import FormList from './components/FormList';
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Main />}/>
            <Route path='/crear-producto' element={<FormList />} />
            <Route path='/actualizar-producto/:id' element={<FormList />} />
        </Routes>

    </div>
  );
}

export default App;
