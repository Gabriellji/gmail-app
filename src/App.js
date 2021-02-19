import "./App.css";

import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

import GoogleLogin from "./login";
import GoogleLogout from "./logout";
import Home from "./home";
import StartPage from "./start-page";

function App() {

  const [state, setState] = useState('')

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={(props) => <StartPage {...props} />} />
        <Route path="/home" render={(props) => <Home {...props} />} />     
      </Switch>
      {/* <GoogleLogin /> */}
      {/* <GoogleLogout/> */}
    </div>
  );
}

export default App;
