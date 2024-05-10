import React from 'react'
import ReactDOM from 'react-dom/client'
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
import AllFoods from './Componets/AllFoods/AllFoods.jsx';
import Gallery from './Componets/Gallery/Gallery.jsx';
import Contact from './Componets/Contact/Contact.jsx';
import SingleFood from './Componets/SingleFood/SingleFood.jsx';
import Purchase from './Componets/Purchase/Purchase.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/allfoods",
        element: <AllFoods></AllFoods>,
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/singlefood/:id",
        element: <SingleFood></SingleFood>,
        loader: ({params}) =>
          fetch(`http://localhost:5000/allfoods/${params.id}`),
      },
      {
        path: '/purchase',
        element: <Purchase></Purchase>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>
);
