import './App.css';
import Counter from './Counter';
import Home from './Home';
import Todo from './Todo';
import Pages from './pages';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App background">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pages />}>
        <Route index element={<Home></Home>}></Route>
         
          <Route path='count' element={<Counter />} /> 
          <Route path="todo" element={<Todo />} /> 
        </Route>
      </Routes>
      
    </BrowserRouter>
    </div>
  );
}

export default App;
