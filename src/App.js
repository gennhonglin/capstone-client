import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import AddPost from "./Pages/AddPost/AddPost";
import Homepage from "./Pages/Homepage/Homepage";
import Location from "./Pages/Location/Location";
import Login from "./Pages/Login/Login";
import PostDetail from "./Pages/PostDetail/PostDetail";
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
            <Route path='/location/:id' element = {<PostDetail/>}></Route>
            <Route path="/add-post" element = {<AddPost/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
