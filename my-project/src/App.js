import './App.css';
import Child from './Child';
import React from 'react';
function App() {
  var getemp=(emps)=>{
    console.log(emps);
  }
  return (
    <div className="App">
      Child To Parent
      <Child getdata={getemp}></Child>
    </div>
  );
}

export default App;
