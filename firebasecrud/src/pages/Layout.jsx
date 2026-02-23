import React from "react";
import { PagesRoutes} from "./PageRoutes";
import { createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PagesRoutes.Navbar />,
    children: [
      {
        index:true,
        element: <PagesRoutes.Home />,
      },
      {
        path: "/dashboard",
        element: <PagesRoutes.Dashboard />,
        children:[
            {
                path:'/dashboard/upload',
                element:<PagesRoutes.Upload/>
            }
        ]
      },
      {
        path: "/login",
        element: <PagesRoutes.Login />,
      },
      {
        path: "/register",
        element: <PagesRoutes.Register />,
      },
      {
        path: "*",
        element: <PagesRoutes.Error />,
      },
    ],
  },
]);

const Layout = () => {
  return <RouterProvider router={router} />;
};

export default Layout;
