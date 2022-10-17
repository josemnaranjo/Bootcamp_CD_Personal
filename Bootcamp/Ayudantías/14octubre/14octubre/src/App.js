
// import { useState } from 'react';
import './App.css';
import Tarea from './Components/Tarea';
// import Tabs from './Components/Tabs';
// import BoxForm from './Components/BoxForm';
// import Boxes from './Views/Boxes';
    


function App() {

    // const [boxes, setbBoxes] = useState([]);
  return (
    <div className="App">
        {/* <BoxForm boxes={boxes} setbBoxes={setbBoxes}/>
        <Boxes boxes={boxes} setbBoxes={setbBoxes}/> */}
        {/* <Tabs/> */}
        <Tarea description={"esta es una tarea"}></Tarea>
    </div>
  );
}

export default App;
