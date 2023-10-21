import * as React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute ({isLoggedIn, element: Component, ...props}) {
  return (
    isLoggedIn ? <Component {...props} /> : <Navigate to="/signup" />
  )
}

export default ProtectedRoute;