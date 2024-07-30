import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home.jsx';
import UpdateUser from './Components/UpdateUser.jsx';
import Login from './Components/Login.jsx';
import axios from 'axios';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/update-user/:id",
        element: <UpdateUser/>,
        loader: ({params}) => axios.put(`http://localhost:3000/users/${params.id}`,{
         headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
        })
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)