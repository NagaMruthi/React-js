import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Page from './Layout-page/open-page';
import Count from './Count';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Page></Page>}></Route>
      <Route path="count" element={<Count></Count>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
