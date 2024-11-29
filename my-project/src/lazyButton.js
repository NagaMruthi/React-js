import React,{lazy,Suspense} from "react";
const Button=lazy(()=>import('./button'))
const Lazybutton=()=>{
    return(
        <Suspense fallback={<div>loading...</div>}>
            <Button></Button>
        </Suspense>
    )
}
export default Lazybutton;