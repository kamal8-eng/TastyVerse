import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "./contexts/CartContext";

function Nav() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const { cartItems} = useCartContext();

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
console.log(totalItems)
  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = () => {
    const userData = localStorage.getItem("currentUser");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("isLoggedIn");
    setUser(null);
    navigate("/");
    setTimeout(() => window.location.reload(), 100);
  };

  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-gradient-to-tr from-orange-700 to-yellow-500 text-white shadow-md sticky top-0 z-50">
      <h1 
        className="text-3xl font-extrabold cursor-pointer"
        onClick={() => navigate("/")}
      >
        TastyVerse
      </h1>

      <div className="flex items-center space-x-6 text-xl font-bold">
        <a href="/" className="hover:text-yellow-200">Home</a>
        <a href="/cart" className="hover:text-yellow-200">Cart</a>

        {!user ? (
          <>
            <a href="/signup" className="hover:text-yellow-200">SignUp</a>
            <a href="/login" className="hover:text-yellow-200">Login</a>
          </>
        ) : (
          <div className="relative group">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-orange-700 font-bold text-lg cursor-pointer">
              {user.initial}
            </div>
            
            <div className="absolute hidden group-hover:block bg-white text-orange-700 mt-2 p-3 rounded shadow-lg w-40 right-0">
              <button 
                onClick={() => navigate("/profile")}
                className="block w-full text-left hover:text-orange-500 mb-2"
              >
                Profile
              </button>
              <button 
                onClick={handleLogout}
                className="block w-full text-left hover:text-orange-500"
              >
                Logout
              </button>
            </div>
          </div>
        )}

        <a href="#" className="hover:text-yellow-200">Support</a>
      </div>
    </nav>
  );
}

export default Nav;