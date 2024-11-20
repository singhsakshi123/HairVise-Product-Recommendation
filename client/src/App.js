import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
// import Quiz from './components/Quize'; 
import { Login } from "./Pages/Login";
import { Signup } from "./Pages/Signup";
import { Profile } from "./Pages/Profile";
import { ChatBot } from "./Pages/ChatBot";
import { Quiz } from "./Pages/Quiz";
import { Shop } from "./Pages/Shop";
import { Cart } from "./Pages/Cart";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/home' element={<Home />} />
          <Route path='/quiz' element={<Quiz />} /> 
          <Route path='/profile' element={<Profile />} /> 
          <Route path='/chat' element={<ChatBot />} /> 
          <Route path='/shop' element={<Shop />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
