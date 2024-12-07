import React from "react";
function Courses(){
     const [Courses,setCourses]=React.useState([{
       Name:"Introduction to AI",
       Sub:'Learn The of AI and machine learnig' 
     },
    {
        Name:'Data Science 101',
        Sub:"Discover the world of data analysis and visualization"
    },
{
    Name:'Neural Networks',
    Sub:'Dive into the working of neural networks'
}])
    return(
        <>
        <ul>
            {
                Courses.map((res,i)=>{
                    return(<><h3>{res.Name}</h3>
                    <h6>{res.Sub}</h6>
                        </>
                    )
                })
            }
        </ul>
        </>
    )
}
export default Courses;