
import './App.css';
import PersonCard from './components/PersonCard.js';

function App() {
  return (
    <div className="App">
        <PersonCard firstName = "Josemaria" lastName="Naranjo" age={33} hairColor ="Café oscuro"/>
        <PersonCard firstName = "Javiera" lastName="Montenegro" age={29} hairColor ="Negro"/>
    </div>
  );
}

export default App;
