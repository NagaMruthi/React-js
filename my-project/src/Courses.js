import React, { memo } from "react";
import { useGetallcoursesQuery } from "./services/Api";

function Courses() {
  const { data, isLoading } = useGetallcoursesQuery();

  // Handle case where no courses are available
  if (!isLoading && (!data || data.length === 0)) {
    return (
      <h1 style={{ textAlign: "center", color: "#555" }}>No courses available</h1>
    );
  }

  return isLoading ? (
    <h1 style={{ textAlign: "center", color: "#555" }}>Loading...</h1>
  ) : (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", color: "#333" }}>Home Page</h1>
      {data.map((course) => (
        <div
          key={course.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "5px",
            padding: "15px",
            marginBottom: "20px",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h3 style={{ color: "#007BFF" }}>{course.title}</h3>
          <p style={{ color: "#555" }}>{course.subtitle}</p>
          <a
            href={course.pdf}
            style={{
              color: "#28a745",
              textDecoration: "none",
              fontWeight: "bold",
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            View PDF
          </a>
        </div>
      ))}
    </div>
  );
}

export default memo(Courses);
