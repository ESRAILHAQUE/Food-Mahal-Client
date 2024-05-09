import React from 'react'
import ReactDOM from 'react-dom/client'
// index.css or App.css or any other CSS file
import 'tailwindcss/tailwind.css';

import "react-toastify/dist/ReactToastify.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from './Layout/Root.jsx';
import Error from './Componets/Error/Error.jsx';
import SignUp from './Componets/SignUp/SignUp.jsx';
import Login from './Componets/Login/Login.jsx';
import Home from './Home/Home/Home.jsx';
import AuthProviders from './Providers/AuthProviders.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element:<Home></Home>
      },
      {
      path: '/signup',
      element:<SignUp></SignUp>,
    },
      {
      path: '/login',
      element:<Login></Login>
    }, {}, {}],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>
);
