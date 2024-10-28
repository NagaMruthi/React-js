import React from "react";

function Count(){
     var[x,SetX]=React.useState(0);
     function increment(){
        SetX(x+1);
     };
     function decrement(){
        SetX(x-1);
     }
    return(<div>
        <h1>Count :{x}</h1>
        <button onClick={(()=>{increment()})}>Increment</button>
        <button onClick={(()=>{decrement()})}>Decrement</button>
    </div>)
}
export default Count;