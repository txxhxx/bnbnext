import React from "react";
import { useCookies } from "react-cookie";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRouter = () => {
  const [cookies] = useCookies(["access_token"]);

  if (!cookies.access_token) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default PrivateRouter;
