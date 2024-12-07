import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './layout';
import Courses from './Courses';
import Home from './Home';
function App() {
  return (<BrowserRouter>
  <Routes>
    <Route path ="/" element={<Layout></Layout>}>
    <Route index element={<Home></Home>}></Route>
    <Route path='/courses' element={<Courses></Courses>}></Route>
    </Route>
  </Routes>
  </BrowserRouter>);
}

export default App;
