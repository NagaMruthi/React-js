import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './layout';
import Courses from './Courses';
import Home from './Home';
import Login from './add';
function App() {
  return (<BrowserRouter>
  <Routes>
    <Route path ="/" element={<Layout></Layout>}>
    <Route index element={<Home></Home>}></Route>
    <Route path='/courses' element={<Courses></Courses>}> </Route>
    <Route path='/add' element={<Login></Login>}></Route>
   
    </Route>
  </Routes>
  </BrowserRouter>);
}

export default App;
