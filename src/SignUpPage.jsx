import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const fullName = formData.get("fullName");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const password = formData.get("password");

    const newUser = {
      id: Date.now().toString(),
      fullName,
      email,
      phone,
      password,
      initial: fullName.charAt(0).toUpperCase()
    };

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    
    const userExists = existingUsers.find(user => user.email === email);
    if (userExists) {
      alert("User with this email already exists!");
      return;
    }

    existingUsers.push(newUser);
    
    localStorage.setItem("users", JSON.stringify(existingUsers));

    alert("Account created successfully!");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-orange-400 to-amber-400">
      <div className="bg-white rounded-2xl p-8 shadow-2xl w-96">
        <h2 className="text-3xl font-bold text-center mb-6">Create Account</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold mb-2">Full Name</label>
            <input
              name="fullName"
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-3 border border-orange-300 rounded-xl focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">Email</label>
            <input
              name="email"
              type="email"
              placeholder="john@example.com"
              className="w-full px-4 py-3 border border-orange-300 rounded-xl focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">Phone</label>
            <input
              name="phone"
              type="tel"
              placeholder="+234 800 000 0000"
              className="w-full px-4 py-3 border border-orange-300 rounded-xl focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Enter password"
              className="w-full px-4 py-3 border border-orange-300 rounded-xl focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-orange-500 to-amber-400 text-white font-bold rounded-2xl text-xl hover:scale-105 transition duration-200"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-orange-600 font-semibold">Login</a>
        </p>
      </div>
    </div>
  );
}

export default SignUp;