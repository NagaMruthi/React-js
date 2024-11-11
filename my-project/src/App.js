import React from 'react'
import About from './About';
function App() {
  const [x,setX]=React.useState([{
    name:"maruthi",
    id:12
  }])
  return (
    <div className="App">
      <About getdata={x}></About>
    </div>
  );
}

export default App;
