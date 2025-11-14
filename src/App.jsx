import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Navbar";
import SignUp from "./SignUpPage";
import LoginPage from "./Login";
import Home from "./Homepage";
import Starters from "./Starters";
import Main from "./MainCourse";
import Profile from "./Profile";
import Dessert from "./Desserts";
import Drinks from "./Drinks";
import Cart from "./Cart";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/starters" element={<Starters />} />
            <Route path="/maincourse" element={<Main />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Login" element={<LoginPage />} />
            <Route path="/desserts" element={<Dessert />} />
            <Route path="/drinks" element={<Drinks />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/Profile" element={<Profile />} />
          </Routes>
          
        </Router>
  );
}

export default App;