
import './App.css';
import Main from './Views/Main';
import DetailProduct from './Views/DetailProduct';
import {Route,Routes} from 'react-router-dom';
import Update from './Views/Update';

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Main />}/>
            <Route path='/api/product/find/:id' element={<DetailProduct />}/>
            <Route path='/api/product/:id/edit' element={<Update/>}/>
        </Routes>
    </div>
  );
}

export default App;
