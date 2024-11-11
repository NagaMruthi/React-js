import{useEffect, useState} from "react";
function Count(){
    const [count,SetCount]=useState(0);
    useEffect(()=>{
        setTimeout(()=>{
            SetCount((count)=>count+1);
            console.log("Count:"+count)
        },2000)
    },[])
    return(<div>
        useEffect{count}
    </div>)

}
export default Count;