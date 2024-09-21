import React from "react";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="mx-8 my-8">
      <div className="w-full h-20 flex flex-col justify-center items-center mr-8 pb-3 shadow-md rounded-xl">
        <h1 className="italic justify-center font-bold">Privacy</h1>
        <h2 className="italic justify-center ">
          Modify your privacy settings here
        </h2>
      </div>
      <div className="w-full flex flex-col mt-6 shadow-md">
        <h1 className="italic ml-20">Profile page settings</h1>
        
        {/* First checkbox */}
        <label className="italic ml-20 mt-6">
          <input type="checkbox" className="mr-2" defaultChecked/>
          Show your profile to logged-in users.
        </label>
        
        {/* Second checkbox */}
        <label className="italic ml-20 mt-4">
          <input type="checkbox" className="mr-2" defaultChecked/>
          Show courses you're taking on your website.
        </label>

        <button className="bg-slate-800 p-3 text-white italic rounded-lg mt-6 mb-5 w-36 ml-20">
          Save
        </button>
      </div>
    </div>
  );
};

export default Privacy;
