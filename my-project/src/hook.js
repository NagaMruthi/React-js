import React,{useEffect, useRef, useState} from 'react'
export default function Hook(){
    const [inputs,setInput]=useState();
    const count=useRef(0);
    useEffect(()=>{
        count.current=count.current+1
    })
    return(<>
    <input type='text' onChange={(e)=>{setInput(e.target.value)}} placeholder='Any value (or) Text'></input>
    <h1>Render{count.current}</h1>
    </>)
}