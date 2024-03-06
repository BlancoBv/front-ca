import React from "react";
import {
  NavLink,
  createBrowserRouter as Router,
  RouterProvider,
  redirect,
} from "react-router-dom";

function Routes() {
  const rutas = Router([
    {
      path: "/",
      element: <div>Ola que ta chendo</div>,
    },
    {
      path: "/ola",
      element: <p>Ola ramirez XD</p>,
    },
  ]);
  return <RouterProvider router={rutas} />;
}

export default Routes;
