import React, { useContext } from "react";

// refresh token
import { refreshTokenSetup } from "../utils/refreshToken";
import { useGoogleLogin } from "react-google-login";

const clientId =
  "613617315125-1vmv9e9f1k1i65dcqgvtkg3hderdusnu.apps.googleusercontent.com";

const GoogleLogin = () => {
  const context = useContext(ShopContext);

  const onSuccess = (res) => {
    //alert(`Logged in successfully welcome ${res.profileObj.name} 😍.`);
    refreshTokenSetup(res);
    const name = res.profileObj.name;
    context.setState({
      ...context.state,
      googleUser: name,
      signByGoogle: true,
      isLoggedIn: true,
      user: name,
      loginIconClicked: !context.state.loginIconClicked,
    });
  };

  const onFailure = () => {
    /* alert(`Failed to login. 😢`) */
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: "offline",
  });

  return (
    <div>
      <img
        src="https://raw.githubusercontent.com/Sivanesh-S/react-google-authentication/9835990bfe7f45a1a14e5854cd57ab715d776b0e/public/icons/google.svg"
        alt="google login"
        onClick={signIn}
      />
      <ButtonX
        action={signIn}
        size="M"
        color="light"
        text={textData.login.text2}
      />
    </div>
  );
};

export default GoogleLogin;