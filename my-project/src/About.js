import React from "react";
class About extends React.Component{
    constructor(props){
        super(props);
        console.log(props.getdata);
            console.log("constructor: component is being initaized ");
       
    }
    componentDidMount(){
        console.log('componentDidmount:component is created and added to dom');

    }
    componentDidUpdate(){
        console.log('componentDidUpdate: Component has been updated'); 
    }
    componentWillUnmount(){
        console.log('componentWillUnmount: Component is about to beremoved from DOM');
            
    }
    render(){
        console.log("component is rendering");
        return<h1>phases of life-cycle</h1>
    }
}
export  default About;