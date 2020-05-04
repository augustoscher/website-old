import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import React, { useState, useEffect } from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from 'history';
import "./App.css";

import Menu from "./template/Menu/menu";
import Routes from "./main/routes";

import postVisits from "./services/postVisits";
import postPageViews from "./services/postPageViews";

const history = createBrowserHistory()

history.listen((location) => {
  postPageViews(location.pathname)
});

const App = () => {
  const [sended, setSended] = useState(null);

  useEffect(() => {  // Similar to componentDidMount and componentDidUpdate:
    const send = () => { 
      postVisits();
      setSended(true)
    };

    if (sended === null) {
      send();
    }
  });


  return (
    <Router history={history}>
      <div className="App">
        <Menu />
        <Routes />
      </div>
    </Router>
  );
};

export default App;
