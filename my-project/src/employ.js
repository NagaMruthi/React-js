import React from 'react'
export default function Employ(){
    const [employ,SetEmploy]=React.useState([{
        name:"Maruthi"
    }]);
    function abc(){
        const inputs=document.getElementById("in").value;
        SetEmploy([...employ,{name:inputs}]);
        console.log(employ);
    }
    return(<>
    <div>
        Add Empoly
    </div>
    <input type='text' placeholder='Empoly Name' id="in"></input>
    <button onClick={abc}>Add</button>
    <h4>Empoly List</h4>
    <div>{employ.map((emp,i)=>{
        return(<li>{emp.name}</li>)
    })}</div>
    </>)
}