import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';
import Courses from './Courses';
import Login from './LOGIN';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>404 - Page not found</div>, 
    children: [
      {
        path: "home",
        element: <Home></Home>,
      },
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "add",
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
