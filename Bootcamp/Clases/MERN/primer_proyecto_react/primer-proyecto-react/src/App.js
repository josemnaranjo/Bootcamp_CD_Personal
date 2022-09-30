
import './App.css';

import PersonCard from './components/PersonCard';
function App() {
  return (
    <div className="App">
        <PersonCard lastName ={"Doe"} firstName ={"Jane"} age ={"Age:45"} hairColor ={"Hair Color: Black"} />
        <PersonCard lastName ={"Smith"} firstName ={"John"} age ={"Age:88"} hairColor ={"Hair Color: Brown"} />
        <PersonCard lastName ={"Fillmore"} firstName ={"Millard"} age ={"Age:50"} hairColor ={"Hair Color: Brown"} />
        <PersonCard lastName ={"Smith"} firstName ={"Maria"} age ={"Age:62"} hairColor ={"Hair Color: Brown"} />
    </div>
  );
}

export default App;
