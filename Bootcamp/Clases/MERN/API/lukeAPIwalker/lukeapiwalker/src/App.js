import './App.css';
import FormWrap from './Views/FormWrap';
import {Route,Routes} from 'react-router-dom';
import InfoCharacter from './components/InfoCharacter';

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<FormWrap/>}/>
            <Route path='/:id' element={<InfoCharacter/>}/>
        </Routes>
    </div>
  );
}

export default App;
