import {Routes,Route} from 'react-router-dom';
import './App.css';
import Main from './views/Main';

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Main/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
