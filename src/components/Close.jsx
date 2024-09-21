import React from "react";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="mx-8 my-8">
      <div className="w-full h-20 flex flex-col justify-center items-center mr-8 pb-3 shadow-md rounded-xl">
        <h1 className="italic justify-center font-bold">Close Account</h1>
        <h2 className="italic justify-center ">
          Close your account permanently
        </h2>
      </div>
      <div className="w-full flex flex-col mt-6 shadow-md">
        <span className="text-red-600 p-4 italic">Warning:</span>
        <h2 className="italic p-4">If you close your account, you will be unsuscribed from all of your courses and will lose access to your account and data associated with your account forever, even if you choose to create a new account using the same email in the future.</h2>
        <h2 className="italic p-4">Please note, if you want to reinstate your account after submitting a deletion request, you will have 14 days after the initial submission date to reach out to <Link><span className="text-blue-600 underline hover:text-blue-800">privacy@udemy.com</span></Link> to cancel this request.</h2>
        <button className="italic bg-red-500 text-white mt-6 rounded-xl p-2 w-40 ml-auto mr-5 mb-6">Close account</button>

      </div>
    </div>
  );
};

export default Privacy;
