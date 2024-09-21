import React from "react";


const Notification = () => {
  return (
    <div className="mx-8 my-8">
      <div className="w-full h-20 flex flex-col justify-center items-center mr-8 pb-3 shadow-md rounded-xl">
        <h1 className="italic justify-center font-bold">Notification</h1>
        <h2 className="italic justify-center ">
          Manage the type of notification you receive
        </h2>
      </div>
      <div className="w-full flex flex-col mt-6 shadow-md font-bold">
        <h1 className="italic ml-20">I want to receive:</h1>
        
        {/* First checkbox */}
        <label className="italic ml-20 mt-6 shadow-md p-6 font-bold">
          <input type="checkbox" className="mr-2" defaultChecked/>
          Promotions, course recommendations, and helpful resources from Udemy.
        </label>
        
        {/* Second checkbox */}
        <label className="italic ml-20 mt-4 shadow-md p-6 font-bold">
          <input type="checkbox" className="mr-2" defaultChecked />
          Announcements from instructors whose course(s) I'm enrolled in.
          <h2 className="font-normal"> To adjust this preference by course, leave this box checked and go to the course dashboard and click on 'Options' to opt in or out of specific announcements.</h2>
        </label>


        <label className="italic ml-20 mt-8 shadow-md p-6 font-bold">
          <input type="checkbox" className="mr-2 " />
          Don't send me any promotional emails.
          <h2 className="font-normal">If this box is checked, please note that you will continue to receive important transactional emails like purchase receipts.</h2>
        </label>

        <button className="bg-slate-800 p-3 text-white italic rounded-lg mt-6 mb-5 w-36 ml-20">
          Save
        </button>
      </div>
    </div>
  );
};

export default Notification;
