import React from "react";
class Main extends React.Component{
    constructor(){
        super();
        this.state={
            username:"",
            usermail:"",
            userpassword:""
        };
    };
    getdata=((event)=>{
        console.log(event.target.value);
        var value=event.target.value
        var username=event.target.username
        this.setState({[username]:value})
    });
    abc=(()=>{
        alert("hi");
        console.log(this.state)

    })
    render(){
        return<div>
            <input placeholder="Enter User Name" type="text" onChange={this.getdata} name="username"></input>
            <br></br>
            <input placeholder="Enter User Email" type="text" onChange={this.getdata} name="useremial"></input>
            <br></br>
            <input placeholder="Enter User Password" onChange={this.getdata} type="text" name="userpassword"></input>
            <br></br>
            <button onClick={this.abc}>submit</button>
        </div>
    }
}
export default Main;