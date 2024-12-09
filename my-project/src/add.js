import React, { useState } from "react";

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState("");

  function handleLogin() {
    alert("Login Successful");
    setIsLoggedIn(true); // Update state to logged in
  }

  function handleLogout() {
    alert("Logout Successful");
    setIsLoggedIn(false); // Update state to logged out
    setCourses([]); // Clear courses on logout
  }

  function handleAddCourse() {
    if (newCourse.trim() !== "") {
      setCourses([...courses, newCourse]);
      setNewCourse(""); // Clear input field
    } else {
      alert("Course name cannot be empty!");
    }
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
        {isLoggedIn ? (
          <>
            <h3 style={{ textAlign: "center" }}>Welcome!</h3>
            <p style={{ textAlign: "center" }}>You are logged in.</p>
            <div>
              <input
                type="text"
                value={newCourse}
                placeholder="Add a new course"
                onChange={(e) => setNewCourse(e.target.value)}
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
            {courses.length > 0 && (
              <div style={{ marginTop: "20px" }}>
                <h4>Your Courses:</h4>
                <ul>
                  {courses.map((course, index) => (
                    <li key={index}>{course}</li>
                  ))}
                </ul>
              </div>
            )}
            <button
              onClick={handleLogout}
              style={{
                marginTop: "10px",
                width: "100%",
                padding: "10px",
                backgroundColor: "#FF4D4F",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <h3 style={{ textAlign: "center" }}>Login Form</h3>
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
        )}
      </div>
    </div>
  );
}

export default Login;
