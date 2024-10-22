import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

function Logout() {
  const { setAuthUser } = useAuth(); // Get setAuthUser from useAuth
  
  const handleLogout = () => {
    try {
      setAuthUser(null); // Set authUser to null on logout
      localStorage.removeItem("Users");
      toast.success("Logout successfully");

      // Reload the page immediately after logout
      window.location.reload();
    } catch (error) {
      toast.error("Error: " + error);
    }
  };

  return (
    <div>
      <button
        className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
