import React from "react";

function Navbar({ view, setView }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a onClick= {() => setView('bio')} className="nav-link active" aria-current="page" href="#bio">
              About Me
            </a>
            <a className="nav-item" href="#aboutme">
              Link
            </a>
            <a onClick= {() => setView('portfolio')} className="nav-link" href="#portfolio">
              Portfolio
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
