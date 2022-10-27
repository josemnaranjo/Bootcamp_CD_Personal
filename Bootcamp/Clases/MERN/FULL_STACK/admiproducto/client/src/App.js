
import './App.css';
import Main from './Views/Main';
import DetailProduct from './Views/DetailProduct';
import {Route,Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Main />}/>
            <Route path='/api/product/find/:id' element={<DetailProduct />}/>
        </Routes>
    </div>
  );
}

export default App;
