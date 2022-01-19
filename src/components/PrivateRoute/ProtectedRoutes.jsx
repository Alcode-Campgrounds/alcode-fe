import React from "react";
import {  Navigate, Outlet} from 'react-router-dom';
import { useUser } from "../../context/UserContext";



export default function ProtectedRoutes(){
  // const useAuth = () => {
    const {user, loading } = useUser();
  //   if (!loading) return user.email
  // }
  // const isAuth = useAuth();
  // console.log('Auth', isAuth)
  console.log('PRIVATE', user);
  if (!loading && user){
    return <Outlet />
  } else {
    return <Navigate to='/signin'/>
  }
  // return user ? <Outlet/> : <Navigate to='/signin'/>
}

