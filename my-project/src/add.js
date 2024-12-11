import React, { useState, useEffect } from "react";

function Login(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [newCourse, setNewCourse] = useState([]);
  const [courseName, setCourseName] = useState("");
  const [courseSub, setCourseSub] = useState("");

  useEffect(() => {
    // Send newCourse to parent whenever it updates
    props.data(newCourse);
  }, [newCourse]); // Dependency array ensures it runs only when newCourse changes

  function handleLogin() {
    alert("Login Successful");
    setIsLoggedIn(true);
  }

  function handleAddCourse() {
    if (courseName && courseSub) {
      setNewCourse([...newCourse, { Name: courseName, Sub: courseSub }]);
      setCourseName(""); // Clear input field
      setCourseSub("");  // Clear input field
    } else {
      alert("Please fill in all fields");
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
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
                placeholder="Add a new course"
                style={{
                  width: "100%",
                  padding: "8px",
                  marginBottom: "10px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              />
              <input
                type="text"
                value={courseSub}
                onChange={(e) => setCourseSub(e.target.value)}
                placeholder="Add Subtitle"
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
