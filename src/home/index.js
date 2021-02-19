import React, { useContext, useState } from 'react';

import GoogleLogout from "../logout";

const Home = () => {
  return (
    <div>
      <h1>I am home</h1>
      <GoogleLogout />
    </div>
  );
};

export default Home;
