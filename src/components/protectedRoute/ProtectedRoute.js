import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const ProtectedRoute = () => {
  const navigate = useNavigate();
  useEffect(() => {
    return navigate("/login");
  }, [navigate]);
  return <></>;
};
export default ProtectedRoute;
