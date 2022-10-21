import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './Views/Home';
import About from './Components/About';
import Products from './Components/Products';
import Product from './Components/Product';
import Layout from './Views/Layout';

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Layout />}>
                {/* index indica que el elemento que lo contenga se renderice con el path del padre */}
                <Route index element={<Home />}/>
                <Route path='/about' element={<About />}/>
                <Route path='/products' element={<Products />}/>
                <Route path='/product/:id' element={<Product />}/>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
