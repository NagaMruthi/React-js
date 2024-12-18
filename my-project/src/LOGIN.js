import React, { useState } from "react";
import { useAddcoursesMutation } from "./services/Api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [pdf, setPdf] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [addCourse] = useAddcoursesMutation();

  const handleLogin = () => {
    if (!email || !password) {
      setError("Please fill in both email and password.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email.");
      return;
    }
    setError("");
    setIsLoggedIn(true); // Mark as logged in
    alert("Login Successful");
  };

  const handleAddCourse = async () => {
    if (!title || !subtitle || !pdf) {
      alert("Please fill in both Title and Subtitle.");
      return;
    }

    try {
      await addCourse({ title, subtitle,pdf }).unwrap();
      alert("Course added successfully!");
      setTitle("");
      setSubtitle("");
    } catch (err) {
      alert("Error adding course.");
      console.error(err);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f0f0",
      }}
    >
      {!isLoggedIn ? (

        <div
          style={{
            padding: "20px",
            borderRadius: "8px",
            backgroundColor: "white",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            width: "300px",
            marginBottom: "20px",
          }}
        >
          <h3 style={{ textAlign: "center" }}>Login Form</h3>
          {error && (
            <div
              style={{
                color: "red",
                marginBottom: "10px",
                textAlign: "center",
                fontSize: "14px",
              }}
            >
              {error}
            </div>
          )}
          <label htmlFor="email">User Email:</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              marginBottom: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
          <label htmlFor="password">User Password:</label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              marginBottom: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
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
          <h3 style={{ textAlign: "center" }}>Add Course</h3>
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            type="text"
            name="title"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              marginBottom: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
          <label htmlFor="subtitle">Subtitle:</label>
          <input
            id="subtitle"
            type="text"
            name="subtitle"
            placeholder="Enter Subtitle"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              marginBottom: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
           <input
            id="subtitle"
            type="file"
            name="pdf"
            placeholder="pdf"
            value={pdf}
            onChange={(e) => setPdf(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              marginBottom: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
          <button
            onClick={handleAddCourse}
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#28a745",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Add Course
          </button>
        </div>
      )}
    </div>
  );
}

export default Login;
