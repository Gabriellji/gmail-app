import React from 'react';
import { useGoogleLogout } from 'react-google-login';

const clientId =
  '811947701613-pbdk4e7i4nbn54n7n9dedshucpb12sje.apps.googleusercontent.com';

const GoogleLogout = () => {
  const onLogoutSuccess = (res) => {
    console.log('Logged out Success');
  };

  const onFailure = () => {
    console.log('Handle failure cases');
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <button onClick={signOut} className="button">
      <img src="https://raw.githubusercontent.com/Sivanesh-S/react-google-authentication/9835990bfe7f45a1a14e5854cd57ab715d776b0e/public/icons/google.svg" alt="google login" className="icon"></img>

      <span className="buttonText">Sign out</span>
    </button>
  );
}

export default GoogleLogout;