import { Routes, Route } from "react-router-dom";
import './App.css';
import User from "./Pages/User";
import UsersList from "./Pages/UsersList";

function App() {
  return (
    <div className="App">
        <Routes>
            {/* element es el elemento que se va a renderizar cuando coincida con la ruta "/path" */}
            <Route path="/users" element={<UsersList/>}>
                <Route path="/users/:foobar" element={<User/>}/>
            </Route>
            
        </Routes>
    </div>
  );
}

export default App;
