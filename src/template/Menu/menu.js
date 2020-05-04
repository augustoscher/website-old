import React, { useState } from "react";
import { Link } from "react-router-dom";

const style = {
  borderRadius: "0px"
};

export default props => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <nav className="navbar navbar-inverse bg-inverse" style={style}>
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            onClick={() => setCollapsed(!collapsed)}
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            aria-expanded="false"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link to="/home" className="navbar-brand">
            Augusto Scher
          </Link>
        </div>
        <div
          className={`${
            collapsed ? "collapse navbar-collapse" : "navbar-collapse"
          }`}
        >
          <ul className="nav navbar-nav">
            {/* <li>
              <Link to="/home"> Home</Link>
            </li> */}
            <li>
              <Link to="/about">Sobre</Link>
            </li>
            <li>
              <Link to="/contact">Contato</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
