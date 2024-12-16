import React, { useState } from "react";
import { useGetallcoursesQuery } from "./services/Api";

function Home() {
    const { data, isLoading } = useGetallcoursesQuery();
   
     return (
       <>
         {isLoading && <h1 style={{ textAlign: "center", color: "#555" }}>Loading...</h1>}
         <div >
           {/* <h2 style={{ textAlign: "center", color: "#555" }}>Courses</h2> */}
           <div >
             {!isLoading &&
               data &&
               data.map((course, index) => (
                 <div  key={index}>
                   <h3>{course.title}</h3>
                   <p>{course.subtitle}</p>
                 </div>
               ))}
           </div>
         </div>
       </>
     );
   
}

export default Home;
