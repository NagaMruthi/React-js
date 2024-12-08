import React from "react";
import './index.css';
import { Outlet,Link } from "react-router-dom";
function Layout() {
  
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className="sidebar" style={{ width: '250px', backgroundColor: '#f8f9fa', position: 'fixed', top: '0', bottom: '0', left: '0', padding: '20px' }}>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" to='/'>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/courses">Courses</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#">Add a new Courses</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#">Notifications</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#">Files</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#">Settings</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#">ePortfolios</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#">Courses Evaluations</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#">QR For Mobile Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#">Global Announcement</a>
          </li>
        </ul>
      </div>

      <div className="main-content" style={{ marginLeft: '250px', width: '100%' }}>
        {/* Top Search Bar and Login Button */}
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <form className="d-flex w-75 mx-auto">
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
            <Link to='/login'  style={{backgroundColor:'green'}}>
                Login
            </Link>
          </div>
        </nav>
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default Layout;
