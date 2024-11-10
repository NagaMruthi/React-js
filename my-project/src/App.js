import './App.css';
import Child from './Child';
import React from 'react';
function App() {
  const [x,setX]=React.useState([
    {
        name:"MTS",
        id:1
    }
]);
  return (
    <div className="App">
      Child To Parent
      <Child getdata={x}></Child>
    </div>
  );
}

export default App;
