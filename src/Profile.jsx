import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("currentUser");
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      navigate("/login");
    }
  }, [navigate]);

  if (!user) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-orange-400 to-amber-400">
      <div className="bg-white rounded-2xl p-8 shadow-2xl w-96">
        <h2 className="text-3xl font-bold text-center mb-6">Profile</h2>
        
        <div className="space-y-4">
          <div className="text-center">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-orange-500 text-white text-2xl font-bold mx-auto mb-4">
              {user.initial}
            </div>
            <h3 className="text-xl font-bold">{user.fullName}</h3>
          </div>

          <div className="space-y-3">
            <div>
              <label className="font-semibold">Email:</label>
              <p className="text-gray-700">{user.email}</p>
            </div>
            
            <div>
              <label className="font-semibold">Phone:</label>
              <p className="text-gray-700">{user.phone}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;