import "./App.css";

import React, { useEffect, useState } from "react";

import GoogleLogin from "./login";
import GoogleLogout from "./logout";

function App() {

  const [state, setState] = useState('')

  return (
    <div className="App">
      <h1>Yo</h1>
      <GoogleLogin />
      <GoogleLogout/>
    </div>
  );
}

export default App;
