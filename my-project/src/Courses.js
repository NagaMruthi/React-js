import React,{Link} from "react";
import './App.css';

function Courses() {
  var getemp=(emps)=>{
    console.clear()
    console.log(emps);
  }
  const [courses, setCourses] = React.useState([
    {
      Name: "Introduction to AI",
      Sub: 'Learn the basics of AI and machine learning',
    },
    {
      Name: 'Data Science 101',
      Sub: "Discover the world of data analysis and visualization",
    },
    {
      Name: 'Neural Networks',
      Sub: 'Dive into the workings of neural networks',
    },
  ]);

  return (
    <div className="flex-container">
      {courses.map((course, i) => (
        <div className="course-card" key={i}>
          <span>{course.Name}</span>
          <br />
          <span>{course.Sub}</span>
        </div>
      ))}
    </div>
  );
}

export default Courses;
