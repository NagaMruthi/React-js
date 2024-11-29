import { useState } from 'react';
import './App.css';
import Lazybutton from './lazyButton';

function App() {
  const [show,setShow]=useState(false);
  return (
    <div className="App">
     <button onClick={()=>setShow(true)}>load button</button>
     {show&&<Lazybutton></Lazybutton>}
    </div>
  );
}

export default App;
