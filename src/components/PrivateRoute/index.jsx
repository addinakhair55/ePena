import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

function PrivateRoute() {
  const { isLogin } = useAuth();

  if (!isLogin) {
    return <Navigate to="/register" />;
  }

  return <Outlet />;
}

export default PrivateRoute;