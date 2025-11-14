import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get ALL users from localStorage
    const allUsers = JSON.parse(localStorage.getItem("users")) || [];
    
    if (allUsers.length === 0) {
      alert("No accounts found. Please sign up first.");
      return;
    }

    // Find user by email
    const user = allUsers.find(user => user.email === email);
    
    if (!user) {
      alert("No account found with this email.");
      return;
    }

    // Check password
    if (password === user.password) {
      // Set this user as current user
      localStorage.setItem("currentUser", JSON.stringify(user));
      localStorage.setItem("isLoggedIn", "true");
      
      alert("Login successful!");
      navigate("/");
      setTimeout(() => window.location.reload(), 100);
    } else {
      alert("Invalid password.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-orange-400 to-amber-400">
      <div className="bg-white rounded-2xl p-8 shadow-2xl w-96">
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold mb-2">Email</label>
            <input
              type="email"
              placeholder="john@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-orange-300 rounded-xl focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-orange-300 rounded-xl focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-orange-500 to-amber-400 text-white font-bold rounded-2xl text-xl hover:scale-105 transition duration-200"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-6">
          Don't have an account?{" "}
          <a href="/signup" className="text-orange-600 font-semibold">Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;