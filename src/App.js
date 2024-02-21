import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./login";
import Home from "./home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
