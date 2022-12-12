import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="navbar-main navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <div className="navbar-brand"></div>

          <div
            className="navbar-text-div collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
              <li className="nav-item mb-3 mt-3 mx-4">
                <a className="fs-6 nav-link" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item mb-3 mt-3 mx-4">
                <a className="fs-6 nav-link" href="/">
                  Service
                </a>
              </li>
              <li className="nav-item mb-3 mt-3 mx-4">
                <a className="fs-6 nav-link" href="/">
                  Portfolio
                </a>
              </li>
              <li className="nav-item mb-3 mt-3 mx-4">
                <a className="fs-6 nav-link" href="/">
                  Community
                </a>
              </li>
              <li className="nav-item mb-3 mt-3 mx-2">
                <a className="fs-6 nav-link" href="/">
                  Blog
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <div className="d-grid gap-2 d-md-block mx-5">
                <button className="navbar-btn mx-3">Sign Up</button>
                <button className="navbar-btn mx-3">Sign in</button>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
