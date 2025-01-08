import React from "react";
import { useState } from "react";
function Input(){
    const [student,setStudent]=useState([]);
    const [data,setData]=React.useState({
        name:'',
        age:''
    })
    function change(event){
        const {name,value}=event.target;
    setData({...data,[name]:value})}
    console.log(data);
    setData("")
    function Submit(){

        alert("hi")
    }
    return(
        <div>
            <form onSubmit={Submit}>
                <label>Name:</label>
                <input type="text" name="names"placeholder="Enter Name" onChange={change} value={data.name}></input>
                <br></br>
                <label>Age:</label>
                <input type="text" name="age" placeholder="Enter Age"onChange={change} value={data.age}></input>
                <br></br>
                <button >Submit</button>
            </form>
        </div>
   );
}
export default Input;