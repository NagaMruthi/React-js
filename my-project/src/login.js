import React, { useState } from "react";

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  function handleLogin() {
    alert("Login Successful");
    setIsLoggedIn(true); 
  }
  function handleLogout() {
    setIsLoggedIn(false); 
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f0f0",
      }}
    >
      <div
        style={{
          padding: "20px",
          borderRadius: "8px",
          backgroundColor: "white",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          width: "300px",
        }}
      >
        {!isLoggedIn ? (
          <>
            <h3 style={{ textAlign: "center" }}>Login Form</h3>
            <br />
            <label>User Email:</label>
            <input
              type="email"
              placeholder="Enter Email"
              style={{
                width: "100%",
                padding: "8px",
                marginBottom: "10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
            <br />
            <label>User Password:</label>
            <input
              type="password"
              placeholder="Enter Password"
              style={{
                width: "100%",
                padding: "8px",
                marginBottom: "10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
            <br />
            <button
              onClick={handleLogin}
              style={{
                width: "100%",
                padding: "10px",
                backgroundColor: "#007BFF",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Submit
            </button>
          </>
        ) : (
          // Display Logout Button if the user is logged in
          <div style={{ textAlign: "center" }}>
            <h3>Welcome!</h3>
            <button
              onClick={handleLogout}
              style={{
                width: "100%",
                padding: "10px",
                backgroundColor: "#FF5733",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
