import React from "react";

const Section = () => {
  return (
    <div className="mx-8 my-8">
      <div className="flex flex-col w-full h-full justify-center items-center mb-8 shadow-md">
        <h1 className="font-bold italic">User profile</h1>
        <h2 className="mb-4 italic">Add information about yourself</h2>
      </div>
      {/* Form */}
      <form>
        <div className="mb-4">
          <label className="block font-medium mb-2 italic">
            First Name:
          </label>
          <input
            type="text"
            placeholder="First Name"
            className="w-full border bg-slate-200 p-2 rounded-xl italic"
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-2 italic">
            Last Name:
          </label>
          <input
            type="text"
            placeholder="Last Name"
            className="w-full border bg-slate-200 p-2 rounded-xl italic"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2 italic">
            Headline:
          </label>
          <input
            type="text"
            placeholder="Headline"
            className="w-full border bg-slate-200 border-gray-300 p-2 rounded-xl italic"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2 italic">
            Description:
          </label>
          <textarea
            placeholder="Description"
            className="w-full border bg-slate-200 border-gray-300 p-2 rounded-xl h-24 italic"
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button className="bg-slate-600 p-4 italic text-white rounded-xl">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Section;
