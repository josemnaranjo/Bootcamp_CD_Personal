import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Views/Home';
import Mix from './Views/Mix';
import Especial from './Views/Especial'


function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/:word' element={<Mix/>}/>
            <Route path='/:text/:colorText/:bkgColor' element={<Especial/>}/>
        </Routes>
    </div>
  );
}

export default App;
