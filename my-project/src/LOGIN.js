import React, { useState } from "react";
import Courses from "./Courses";

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({ title: "", subtitle: "" });

  function handleLogin() {
    alert("Login Successful");
    setIsLoggedIn(true);
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmitPostLogin() {
    alert(`Title: ${formData.title}\nSubtitle: ${formData.subtitle}`);
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
      {isLoggedIn ? (
        <div
          style={{
            padding: "20px",
            borderRadius: "8px",
            backgroundColor: "white",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            width: "300px",
          }}
        >
          <h3 style={{ textAlign: "center" }}>Post Login Form</h3>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Enter Title"
            style={{
              width: "100%",
              padding: "8px",
              marginBottom: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
          <br />
          <label>Subtitle:</label>
          <input
            type="text"
            name="subtitle"
            value={formData.subtitle}
            onChange={handleInputChange}
            placeholder="Enter Subtitle"
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
            onClick={handleSubmitPostLogin}
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
        </div>
      ) : (
        <div
          style={{
            padding: "20px",
            borderRadius: "8px",
            backgroundColor: "white",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            width: "300px",
          }}
        >
          <h3 style={{ textAlign: "center" }}>Login Form</h3>
          <label>User Email:</label>
          <input
            type="email"
            name="Email"
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
            name="password"
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
        </div>
      )}
    </div>
  );
}

export default Login;
