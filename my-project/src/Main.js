import React from "react";
class Main extends React.Component{
    constructor(){
        super();
        this.state={
            username:"",
            useremail:"",
            userpassword:""
        };
    };
    getdata=((event)=>{
        console.log(event.target.value);
        var value=event.target.value;
        var name=event.target.name;
        this.setState({[name]:value});
    });
    abc=((event)=>{
            event.preventDefault();
        alert("hi");
        console.log(this.state);

    })
    render(){
        return<div>
            <form>
            <input placeholder="Enter User Name" type="text" onChange={this.getdata} name="username"></input>
            <br></br>
            <input placeholder="Enter User Email" type="text" onChange={this.getdata} name="useremail"></input>
            <br></br>
            <input placeholder="Enter User Password" onChange={this.getdata} type="text" name="userpassword"></input>
            <br></br>
            <button onClick={this.abc}>submit</button>
            </form>
            
        </div>
    }
}    
export default Main;