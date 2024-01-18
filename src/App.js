import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import './App.css';
import AddPost from "./Pages/AddPost/AddPost";
import EditProfile from "./Pages/EditProfile/EditProfile";
import Homepage from "./Pages/Homepage/Homepage";
import Location from "./Pages/Location/Location";
import Login from "./Pages/Login/Login";
import PostDetail from "./Pages/PostDetail/PostDetail";
import Profile from "./Pages/Profile/Profile";
import Signup from "./Pages/Signup/Signup";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="*" element={<Navigate to="./login" replace/>}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/signup' element={<Signup />}></Route>
            <Route path='/homepage' element = {<Homepage />}></Route>
            <Route path='/location' element = {<Location />}></Route>
            <Route path='/location/:id' element = {<PostDetail/>}></Route>
            <Route path="/add-post" element = {<AddPost/>}></Route>
            <Route path="/profile" element = {<Profile/>}></Route>
            <Route path="/edit-profile" element = {<EditProfile/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
