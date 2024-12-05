import React from "react";
function Todo() {
  const [x, setX] = React.useState([]); 
  const [data, setData] = React.useState({
    name: "",
    age: "",
    number: "",
  });
  function handlechange(event) {
    const { name, value } = event.target;
    setData((old) => ({
      ...old,
      [name]: value,
    }));
  }
  function handleSubmit(event) {
    event.preventDefault();
    setX([...x, data]); 
    setData({ name: "", age: "", number: "" }); 
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          placeholder="Name"
          type="text"
          onChange={handlechange}
          name="name"
          value={data.name}
        />
        <br />
        <label>Age</label>
        <input
          placeholder="Age"
          type="text"
          onChange={handlechange}
          name="age"
          value={data.age}
        />
        <br />
        <label>
          Mobile Number
          <input
            type="text"
            placeholder="Mobile number"
            onChange={handlechange}
            name="number"
            value={data.number}
          />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
      {x.map((res, i) => (
        <div key={i}>
          <p>Name: {res.name}</p>
          <p>Age: {res.age}</p>
          <p>Number: {res.number}</p>
        </div>
      ))}
    </>
  );
}

export default Todo;
