import React from "react";
import { Navigate } from "react-router";
import ROUTE_URLS from "../../config/routes";

const RouteAuthGuard = ({ children }) => {
  const token = localStorage.getItem('PORT_TOKEN');
  if (!token) {
    return <Navigate to={ROUTE_URLS.LOGIN} replace />;
  }
  return children;
};

export default RouteAuthGuard;
