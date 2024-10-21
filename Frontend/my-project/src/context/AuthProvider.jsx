import React, { createContext, useContext, useState } from "react";

// Create a context for authentication
export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  // Retrieve the initial auth user from localStorage
  const initialAuthUser = localStorage.getItem("Users");
  
  // State to manage the authenticated user
  const [authUser, setAuthUser] = useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : undefined
  );

  // Provide authUser and setAuthUser to the context
  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to access auth context
export const useAuth = () => useContext(AuthContext);
