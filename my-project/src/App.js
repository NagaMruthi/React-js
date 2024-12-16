import { Outlet } from 'react-router-dom';
import './App.css';
import Layout from './layout';
function App() {
  return (<div>
    <Layout></Layout>
    <Outlet></Outlet>
  </div>)
}

export default App;
