import './App.css';
import Home from './views/Home';
import {Routes,Route} from 'react-router-dom';
import PackageForm from './components/PackageForm';

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='home' element={<Home />}/>
            <Route path='crear-paquete' element={<PackageForm />}/>
            <Route path='update-paqute/:id' element={<PackageForm/>}/>
        </Routes>
    </div>
  );
}

export default App;
