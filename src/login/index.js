import React, { useContext } from "react";

import { Context } from '../context'
import { refreshTokenSetup } from "../utils/refreshToken";
import { useGoogleLogin } from "react-google-login";

const clientId =
  "811947701613-pbdk4e7i4nbn54n7n9dedshucpb12sje.apps.googleusercontent.com";

  const GoogleLogin = () => {
    const context = useContext(Context)
    const onSuccess = (res) => {
      console.log('Login Success: currentUser:', res.profileObj, res);
      context.setState(res)
      // alert(
      //   `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
      // );
      refreshTokenSetup(res);
    };
  
    const onFailure = (res) => {
      console.log('Login failed: res:', res);
    };
  
    const { signIn } = useGoogleLogin({
      onSuccess,
      onFailure,
      clientId,
      isSignedIn: true,
      accessType: 'offline',
      // responseType: 'code',
      // prompt: 'consent',
    });
  
    return (
      <button onClick={signIn} className="button">
        <img src="https://raw.githubusercontent.com/Sivanesh-S/react-google-authentication/9835990bfe7f45a1a14e5854cd57ab715d776b0e/public/icons/google.svg" alt="google login" className="icon"></img>
  
        <span className="buttonText">Sign in with Google</span>
      </button>
    );
  }
  
  export default GoogleLogin;