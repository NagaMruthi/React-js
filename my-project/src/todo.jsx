import React from 'react';
import './props.jsx'
import Props from './props.jsx';
function Todo(){
    var [x,setx]=React.useState(["bills"]);
        function acs(){
            setx([...x,document.getElementById("input").value]);
        alert("hi" +document.getElementById("input").value);
    }
    return(<div>
        TODO LIST
        <input type="text" id="input" placeholder="Enter Todo"></input>
        <button onClick={(()=>{acs()})}>Submit</button>
        <Props name={x}></Props>
    </div>)
}
export default Todo;