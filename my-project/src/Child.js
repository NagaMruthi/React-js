import React from "react";
function Child(props){
    const [x,setX]=React.useState([
        {
            name:"maruthi",
            id:1
        }
    ]);
    props.getdata(x);
    return(
        <div>
            Child
        </div>
    )
}
export default Child;