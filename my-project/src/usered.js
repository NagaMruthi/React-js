import { Fragment, useReducer } from "react";
import React from "react";

function Reducer(){
    const initialstate={count:0}
    const reducer=(state,action)=>{
        switch(action.type){
            case 'increment':
                return{count:state.count+1};
            case 'Decrement':
                return{count:state.count-1}
        }
    };
   
    const [state,dispatch]=useReducer(reducer,initialstate);

    return(<Fragment>
        <p>
            count :{state.count}
        </p>
        <button onClick={()=>dispatch({type:'increment'})}>
            Increment
        </button>
        <button onClick={()=>dispatch({type:'Decrement'})}>Decrement</button>
    </Fragment>)
}
export default Reducer;