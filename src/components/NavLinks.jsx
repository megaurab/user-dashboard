import React from "react";
import {Link} from "react-router-dom";

const NavLinks = () => {
  return (
    <div className="h-screen flex bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md overflow-y-scroll h-screen scrollbar-hide">
        <div className="p-6 flex flex-col justify-center items-center">
          {/* User Info */}
          <div className="flex items-center justify-center bg-gray-800 rounded-full w-20 h-20 mx-auto mt-1">
            <span className="text-white text-3xl">KD</span>
          </div>
          <h2 className="mt-4 text-center text-lg font-semibold">KONSENG</h2>
        </div>

        {/* Navigation Links */}
        <nav className="mt-4 flex justify-center items-center">
          <ul>
            {/* Add more list items to see scrolling */}
            <Link to="/profile"><li className="py-2 px-4 hover:bg-gray-200 pb-3 shadow-lg italic mt-2 w-full rounded-md">
                Profile
            </li></Link>
            <Link to="/photo"><li className="py-2 px-4 hover:bg-gray-200 pb-3 shadow-lg italic mt-2 rounded-md">
              Photo
            </li></Link>
            <Link to="/security"><li className="py-2 px-4 hover:bg-gray-200 pb-3 shadow-lg italic mt-2 rounded-md">
              Account Security
            </li></Link>
            <li className="py-2 px-4 hover:bg-gray-200 pb-3 shadow-lg italic mt-2 rounded-md">
              <a href="#" className="block text-gray-700">
                Subscriptions
              </a>
            </li>
            <li className="py-2 px-4 hover:bg-gray-200 pb-3 shadow-lg italic mt-2 rounded-md">
              <a href="#" className="block text-gray-700">
                Payment methods
              </a>
            </li>
            <li className="py-2 px-4 hover:bg-gray-200 pb-3 shadow-lg italic mt-2 rounded-md">
              <a href="#" className="block text-gray-700">
                Privacy
              </a>
            </li>
            <li className="py-2 px-4 hover:bg-gray-200 pb-3 shadow-lg italic mt-2 rounded-md">
              <a href="#" className="block text-gray-700">
                Notifications
              </a>
            </li>
            <li className="py-2 px-4 hover:bg-gray-200 pb-3 shadow-lg italic mt-2 rounded-md">
              <a href="#" className="block text-gray-700">
                API clients
              </a>
            </li>
            <li className="py-2 px-4 hover:bg-gray-200 pb-3 shadow-lg italic mt- rounded-md">
              <a href="#" className="block text-gray-700">
                Close account
              </a>
            </li>
            {/* Add more items to test scrolling */}
            <li className="py-2 px-4 hover:bg-gray-200 pb-3 shadow-lg italic mt-2 rounded-md">
              <a href="#" className="block text-gray-700">
                Close account
              </a>
            </li>
            <li className="py-2 px-4 hover:bg-gray-200 pb-3 italic mt-2 rounded-md">
              <a href="#" className="block text-gray-700">
                
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavLinks;
