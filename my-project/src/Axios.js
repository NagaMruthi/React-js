import axios from "axios";
import React from "react";
function Axios(){
    //get method
    // const [data,setData]=React.useState([])
    // axios.get("https://jsonplaceholder.typicode.com/posts")
    // .then((response)=>{
    //     console.log(response.data);
    //     setData(response.data);
    // })
    // .catch((error)=>{
    //     console.log(error)
    // });
    //add method using post
    // const newPost={
    //     title:"Hello World",
    //     body:"this is new post",
    //     userid:789456
    // }
    // axios.post("https://jsonplaceholder.typicode.com/posts", newPost).then(response=>{
    //     console.clear();
    //     console.log(response.data)
    // });
    //put method 
    // const updatedPost = {
    //     title: "Hello World Updated",
    //     body: "This is an updated post",
    //     userId: 1
    //     };        
    // axios.put("https://jsonplaceholder.typicode.com/posts/1", updatedPost)
    // .then(response => 
    //     {
    //         console.log(response.data);
    //     })
    // .catch(error => {

    //     console.error(error);
    // })
    axios.delete("https://jsonplaceholder.typicode.com/posts/1")
   .then(response => {
    console.log(response.data);
    })
     .catch(error => {

    console.error(error);
    });
    return(<div>
        {/* {
           data.map((res)=>{
            return(<div>Title:{res.title}</div>)
           }) 
        } */}
    </div>)

}
export default Axios