import React from "react";
function Demofunction(){
    var [X,setX]=React.useState(
        {
            username:"",
            usermail:"",
            password:""
        }
    )
    function change(event){
        var value=event.target.value
        var name=event.target.name;
        setX({...X,[name]:value});
    }
    function submit(event){
        event.preventDefault();
        console.log(X);
    }
    return(<div>
        Functional Component
        <form onSubmit={submit}>
        <input type="text" placeholder="Enter User Name" name="username" onChange={change}></input>
        <br></br>
        <input type="text" placeholder="Enter User Email"name="usermail" onChange={change}></input>
        <br></br>
        <input type="text" placeholder="enter User Password" name="password" onChange={change}></input>
        <br></br>
        <button type="submit">submit</button>
        </form>
    </div>)
}
export default Demofunction;