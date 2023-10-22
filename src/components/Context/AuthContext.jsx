import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);

  const login = ({ email, password }) => {
    return new Promise((resolve) => {

      const loginBerhasil = validasiLoginBerhasil(email, password);
  
      if (loginBerhasil) {
        setIsLogin(true);
        resolve(true);
      } else {
        resolve(false);
      }
    });
  };
  

  const logout = () => {
    setIsLogin(false);
  };

  return (
    <AuthContext.Provider value={{ isLogin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

const validasiLoginBerhasil = (email, password) => {
  console.log('Email:', email);
  console.log('Password:', password);

  return true;
};


export default AuthContext;