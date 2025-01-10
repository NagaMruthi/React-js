import React from "react";
import { Outlet, Link } from "react-router-dom";
function Page() {
  // Function for handling button click
  function abc() {
    alert("hi");
  }

  return (
    <>
    <div className="parent">
      <div className="f-1">
        <Link to='/'>Home</Link>
        <Link to='/count'>count</Link>
        {/* <a href="">Add Post</a>
        <a href="">Update Posts</a> */}
      </div>
      <div className="f-2">
        <input type="text" placeholder="Enter your text here" />
        <button onClick={abc}>Login</button>
        
      </div>
      <Outlet></Outlet>
    </div>
    </>
  );
}

export default Page;
