import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Homepage from "./Pages/Homepage/Homepage";
import Location from "./Pages/Location/Location";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/signup' element={<Signup />}></Route>
            <Route path='/homepage' element = {<Homepage />}></Route>
            <Route path='/location' element = {<Location />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
