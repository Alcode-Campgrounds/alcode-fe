import axios from 'axios';
// import Cookie from 'js-cookie';
// import { GoogleLogin } from 'react-google-login';
export const AxiosApiCall = () => axios({
    method:'GET',
    url: `${process.env.REACT_APP_OAUTH}`,
    // data: body,
  });
// export default function Google() {
//   const onGoogleSuccess = (response) => {
//     const access_token = response.accessToken;
//     axiosApiCall(
//       '/auth/google',
//       'post',
//       { access_token }
//     ).then((res) => {
//       const { user, token } = res.data;
//       // Save the JWT inside a cookie
//       Cookie.set('token', token);
//     }).catch((err) => {
//       throw new Error(err);
//     })
//   }
//   const onGoogleFailure = () => {}
//   return (
//     <div>
//       <GoogleLogin 
//         clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
//         buttonText="Sign in with Google"
//         onSuccess={onGoogleSuccess}
//         onFailure={onGoogleFailure}
//         className="google-login-button" />
//     </div>
//   );
// }