import React from "react";
import { Navigate, Outlet } from 'react-router-dom';
import { useLoadingUser, useUser } from "../../context/UserContext";

export default function ProtectedRoutes() {
  const loading = useLoadingUser();
  const { user } = useUser();
  if (!loading && !user) {
    return <Navigate to='/signin' />
  } else {
    return <Outlet />
  }
}

