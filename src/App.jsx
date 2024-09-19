import React from "react";
import Dashboard from "./components/Dashboard";
import { createBrowserRouter,Outlet,Outlett } from "react-router-dom";
import Section1 from "./components/Section1";

const App = () => {
  return (
    <div>
      <Dashboard />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    errorElement:<Error />,
    children:[
      {
        path:"/",
        element:<Dashboard />,
      },
      {
        path:"/profile",
        element:<Section1 />
      }
    ]
  }
])

export default appRouter;
