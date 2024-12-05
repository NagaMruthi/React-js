import React from "react";
import './index.css';
function Home() {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <div className="row w-100  align-items-center">
        <div className="row mt-2">
          <div className="col">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex" style={{backgroundColor:"red"}}>
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link "  href="#">
                  Courses
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Add a new Courses
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Notifactions
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Files
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Settings
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  ePortfolios
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                Courses Evaluations
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  QR For Mobile Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Gobal<br></br>
                  Announcement
                </a>
              </li>
            </ul>
          </div>
        </div>
          <div className="col-6 d-flex justify-content-center">
            
            <form className="d-flex w-75">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
          <div className="col-3 d-flex justify-content-end align-items-center">
            <button className="btn btn-primary">Login</button>
          </div>
        </div>

        {/* Navigation Links */}
        
      </div>
    </nav>
  );
}

export default Home;
