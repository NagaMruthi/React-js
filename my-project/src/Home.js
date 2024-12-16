import React from "react";
import { useGetallcoursesQuery } from "./services/Api";
function Home() {
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
      {data.map((course) => (
        <div className="course-card" key={course.id}> 
          <h3>{course.title}</h3>
          <p>{course.subtitle}</p>
        </div>
      ))}
     
    </div>
  );
}

export default Home;
