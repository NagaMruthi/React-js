import React from "react";
function Child(props){
    console.log(props.getdata)
    return(
        <div>
            Child{
                props.getdata.map((e)=>{
                    return<div>{e.name}</div>
                })
            }
        </div>
    )
}
export default Child;