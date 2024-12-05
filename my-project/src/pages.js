import { Outlet, Link } from "react-router-dom";

function Pages() {
  return (
    <>
      <nav>
        <h1>Welcome to Home Page</h1>
          <p>
            <Link to="/">Home</Link>
          </p>
          <p>
            <Link to="/todo">Todo List</Link>
          </p>
          <p>
            <Link to="/count"> Counter</Link>
          </p>
      </nav>
      <Outlet />
    </>
  );
}

export default Pages;
