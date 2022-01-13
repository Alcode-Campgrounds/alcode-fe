import React from "react";
import {  Navigate, Outlet} from 'react-router-dom';
import { useUser } from "../../context/UserContext";
// import useAuth from "../../hooks/useAuth";

const useAuth = () => {
  const {user} = useUser();
  return user.email
}


export default function ProtectedRoutes(){
  const isAuth = useAuth();

  return isAuth ? <Outlet/> : <Navigate to='/signin'/>

}


// export function PrivateRoute({ children, ...rest }) {
//   let auth = useAuth();
//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//         auth.user ? (
//           children
//         ) : (
//           <Redirect
//             to={{
//               pathname: '/login',
//               state: { from: location },
//             }}
//           />
//         )
//       }
//     />
//   );
// }