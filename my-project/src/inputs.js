import React, { Fragment, useState } from "react";
function Forms(){
    const [data,setData]=useState([]);
    const [state,setState]=React.useState({
        name:'',
        number:"",
        email:"",
        password:""
    });
    function change(event){
        const {name,value}=event.target;
        setState((pre)=>({
            ...pre,[name]:value
        }))

    }
    function submit(event){
        event.preventDefault();
        setData((pre)=>[...pre,state])
    }
        return(
        <Fragment>
            <form onSubmit={submit}>
                <label>Name:&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input type="text" placeholder="Enter User Name" name="name" onChange={change} value={state.name}></input>
                <br></br>
                <label>Number:</label>
                <input type="text" placeholder="Enter user Mobile Number" name="number" onChange={change} value={state.number}></input>
                <br></br>
                <label>Email:&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input type="email" placeholder="Enter User Email"  name="email" onChange={change} value={state.email}></input>
                <br></br>
                <label>Password:</label>
                <input type="password" placeholder="Enter user password" name="password" onChange={change} value={state.password}></input>
                <br></br>
                &nbsp;
                <input type="submit"></input>
            </form>
            <>
            {
                data.map((res,i)=>{
                    return(<div key={i}><p key={i}>{res.name}</p>
                        <p>{res.number}</p>
                        <p>{res.email}</p>
                        <p>{res.password}</p>
                    </div>
                    )
                })
            }</>
        </Fragment>
    )
}
 export default Forms;
// import React, { Fragment, useState } from "react";

// function Forms() {
//   const [state, setState] = useState({
//     name: "",
//     number: "",
//     email: "",
//     password: "",
//   });

//   function change(event) {
//     const { name, value } = event.target;
//     setState((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   }

//   function submit(event) {
//     event.preventDefault();
//     console.log(state);
//     alert("Form submitted successfully!");
//   }

//   return (
//     <Fragment>
//       <form onSubmit={submit}>
//         <label>
//           Name:&nbsp;&nbsp;&nbsp;&nbsp;
//           <input
//             type="text"
//             placeholder="Enter User Name"
//             name="name"
//             onChange={change}
//             value={state.name}
//           />
//         </label>
//         <br />

//         <label>
//           Number:&nbsp;&nbsp;&nbsp;
//           <input
//             type="text"
//             placeholder="Enter user Mobile Number"
//             name="number"
//             onChange={change}
//             value={state.number}
//           />
//         </label>
//         <br />

//         <label>
//           Email:&nbsp;&nbsp;&nbsp;&nbsp;
//           <input
//             type="email"
//             placeholder="Enter User Email"
//             name="email"
//             onChange={change}
//             value={state.email}
//           />
//         </label>
//         <br />

//         <label>
//           Password:
//           <input
//             type="password"
//             placeholder="Enter user password"
//             name="password"
//             onChange={change}
//             value={state.password}
//           />
//         </label>
//         <br />

//         <button type="submit">Submit</button>
//       </form>
//     </Fragment>
//   );
// }

// export default Forms;
