import React from 'react'
export default function Empoly(){
    const [empoly,SetEmpoly]=React.useState([{
        name:"Maruthi"
    }]);
    function abc(){
        const inputs=document.getElementById("in").value;
        SetEmpoly([...empoly,{name:inputs}]);
        console.log(empoly);
    }
    return(<>
    <div>
        Add Empoly
    </div>
    <input type='text' placeholder='Empoly Name' id="in"></input>
    <button onClick={abc}>Add</button>
    <h4>Empoly List</h4>
    <div>{empoly.map((emp,i)=>{
        return(<li>{emp.name}</li>)
    })}</div>
    </>)
}