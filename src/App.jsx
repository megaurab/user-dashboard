import React from "react";
import NavLinks from "./components/NavLinks";
import { createBrowserRouter, Outlet } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import Section from "./components/Section";
import EditPhoto from "./components/EditPhoto";
import Security from "./components/Security";

const App = () => {
  return (
    <div className="flex flex-row h-screen">
      <div className="w-64 bg-gray-200">
        <NavLinks />
      </div>
      <div className="flex flex-col flex-grow h-screen">
        <div className="shadow-md">
          <SearchBar />
        </div>
        <div className="flex-grow justify-center items-center overflow-scroll scrollbar-hide">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Section />,
      },
      {
        path: "/profile",
        element: <Section />,
      },
      {
        path: "/photo",
        element: <EditPhoto />,
      },
      {
        path: "/security",
        element: <Security />,
      },
    ],
  },
]);

export default appRouter;
