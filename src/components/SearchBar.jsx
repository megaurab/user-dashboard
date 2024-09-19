import React from 'react'

const SearchBar = () => {
  return (
    <div>
        {/* Main Content */}
      <div className=" p-8 overflow-y-scroll scrollbar-hide">
        {/* Search Bar */}
        <div className="relative">
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
  )
}

export default SearchBar;