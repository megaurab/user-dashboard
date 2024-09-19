import React from "react";
import {Link} from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md overflow-y-scroll h-screen scrollbar-hide">
        <div className="p-6 flex flex-col justify-center items-center">
          {/* User Info */}
          <div className="flex items-center justify-center bg-gray-800 rounded-full w-20 h-20 mx-auto mt-5">
            <span className="text-white text-3xl">GB</span>
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
            <li className="py-2 px-4 hover:bg-gray-200 pb-3 shadow-lg italic mt-2 rounded-md">
              <a href="#" className="block text-gray-700">
                Photo
              </a>
            </li>
            <li className="py-2 px-4 hover:bg-gray-200 pb-3 shadow-lg italic mt-2 rounded-md">
              <a href="#" className="block text-gray-700">
                Account Security
              </a>
            </li>
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
                Close account
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-scroll h-screen scrollbar-hide">
        {/* Search Bar */}
        <div className="relative mb-8">
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 p-3 bg-gray-800 text-white rounded-xl focus:outline-none italic"
          />
          <span className="absolute left-3 top-4 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM12 12l4 4"
              />
            </svg>
          </span>
        </div>

        
      </div>
    </div>
  );
};

export default Dashboard;
