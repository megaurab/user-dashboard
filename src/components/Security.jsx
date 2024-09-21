import React from "react";
import { Link } from "react-router-dom";

const Security = () => {
  return (
    <div className="mx-8 my-8">
      <div className="w-full h-20 flex flex-col justify-center items-center mr-8 pb-3 shadow-md rounded-xl">
        <h1 className="italic justify-center font-bold">Account</h1>
        <h2 className="italic justify-center ">
          Edit your account settings and change your password here
        </h2>
      </div>
      <div className="w-full flex flex-col mt-6 justify-center items-center shadow-md">
        <label className="italic mb-2 mr-96 ml-12">Email:</label>
        <input type="email" className="shadow-md mb-5 p-3 rounded-xl italic w-96 bg-slate-200 text-black" placeholder="Update your Email" />
        <label className="italic mb-2 mr-80 ml-2">Password:</label>
        <input type="password" className="shadow-md mb-5 p-3 rounded-xl italic w-96 bg-slate-200 text-black" placeholder="Enter current password" />
        <input type="password" className="shadow-md mb-5 p-3 rounded-xl italic w-96 bg-slate-200 text-black" placeholder="Enter new password" />
        <input type="password" className="shadow-md mb-5 p-3 rounded-xl italic w-96 bg-slate-200 text-black" placeholder="Re-enter new password" />
        <button className="bg-slate-800 p-3 text-white italic rounded-lg mb-5">Change password</button>
      </div>
      <div className="w-full h-48 flex flex-col justify-center items-center shadow-lg italic mt-5 rounded-xl">
        <h1 className="mt-8 mb-6 font-medium">Multi-factor Authentication</h1>
        <h2 className="mx-8">Increase your account security by requiring that a code emailed to you be entered when you log in. For more information on how multi-factor authentication works, refer to our <Link to="/helpCenter"><span className="text-blue-600 underline hover:text-blue-800">Help Center article</span></Link></h2>
        <button className="bg-slate-800 p-2 text-white italic rounded-xl mb-5 mt-4">Enable</button>
      </div>
    </div>
  );
};

export default Security;
