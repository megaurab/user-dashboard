import React from "react";

const EditPhoto = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center mt-8 pb-8 shadow-xl">
        <h1 className="italic justify-center font-bold">Photo</h1>
        <h2 className="italic justify-center ">Add an image to your profile</h2>
      </div>
      <div 
      className="flex w-full h-full justify-center items-center mt-6 mr-12"
      style={{ backgroundImage: 'url("https://i.pinimg.com/474x/95/2f/2e/952f2e5756bc449936816bdc3ebe9af9.jpg")' }}
      >
        <div className="rounded-full h-20 w-20 bg-gray-800 p-36 mr-16"></div>
        <div className="flex flex-col mt-6 mb-8">
          <button className="shadow-md p-3 rounded-lg italic bg-gray-800 text-white mb-1">Browse</button>
          <button className="shadow-md p-3 rounded-lg italic bg-gray-800 text-white mb-1">Camera</button>
          <button className="shadow-md p-3 rounded-lg italic bg-gray-800 text-white mb-1">Save</button>
        </div>
      </div>
    </div>
  );
};

export default EditPhoto;
