
import React from 'react' 
import Component2 from './conditions2';
import Component1 from './conditions1';

function Conditions(props){
    const isLoggedin=props.isLoggedin
    if(isLoggedin){
        return(<Component1></Component1>)
    }
    else{
        return<Component2></Component2>
    }
    
}
export default Conditions;