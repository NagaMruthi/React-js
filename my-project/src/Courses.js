import React, { memo } from "react";
// import "./App.css";
import { useGetallcoursesQuery } from "./services/Api";

function Courses() {
    const { data, isLoading } = useGetallcoursesQuery();
    if (!isLoading && (!data || data.length === 0)) {
      return (
        <h1 style={{ textAlign: "center", color: "#555" }}>No courses available</h1>
      );
    }
  
    return isLoading ? (
      <h1 style={{ textAlign: "center", color: "#555" }}>Loading...</h1>
    ) : (
       <div>
        <h1>Home page</h1>
        {data.map((course) => (
          <div className="course-card" key={course.id}> 
            <h3>{course.title}</h3>
            <p>{course.subtitle}</p>
          </div>
        ))}
       
      </div>
    );
}

export default memo(Courses);
