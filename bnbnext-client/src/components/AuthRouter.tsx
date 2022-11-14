import React from "react";
import { useCookies } from "react-cookie";
import { Navigate, Outlet } from "react-router-dom";

const AuthRouter = () => {
  const [cookies] = useCookies(["access_token"]);

  if (cookies.access_token) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default AuthRouter;
