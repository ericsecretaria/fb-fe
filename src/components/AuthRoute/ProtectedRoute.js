import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  //! Check if user is login
  const { userAuth } = useSelector((state) => state?.users);
  const isLogin = userAuth?.userInfo?.token;

  if (!isLogin) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;
