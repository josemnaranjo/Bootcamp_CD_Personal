
import './App.css';
import Prueba from './components/Prueba.js'
import PruebaProps from './components/Props.js'
import PropsNumberTwo from './components/PropsAgain.js'

function App() {
  return (
    <div className="App">
        <Prueba/>
        <PruebaProps nombre = {"Javiera"} apellido = {"Montenegro"}/>
        <PropsNumberTwo nombre = {"Josemaria"} apellido = {"Naranjo"}/>
        <PropsNumberTwo nombre = {"Sproncho"} apellido = {"Pleto"}/>
    </div>
  );
}

export default App;
