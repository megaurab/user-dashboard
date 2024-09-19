import React from "react";

const Section = () => {
  return (
    <div className="mx-8 my-8">
      <h1 className="text-2xl font-bold mb-4 italic">User profile</h1>
      <p className="mb-6 italic">Add information about yourself</p>

      {/* Form */}
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2 italic">
            First Name:
          </label>
          <input
            type="text"
            placeholder="First Name"
            className="w-full border bg-gray-800 text-white p-2 rounded-xl italic"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2 italic">
            Last Name:
          </label>
          <input
            type="text"
            placeholder="Last Name"
            className="w-full border bg-gray-800 border-gray-300 p-2 rounded-xl italic"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2 italic">
            Headline:
          </label>
          <input
            type="text"
            placeholder="Headline"
            className="w-full border bg-gray-800 border-gray-300 p-2 rounded-xl italic"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2 italic">
            Description:
          </label>
          <textarea
            placeholder="Description"
            className="w-full border bg-gray-800 border-gray-300 p-2 rounded-xl h-24 italic"
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button className="bg-gray-800 p-4 italic text-white rounded-xl mr-5">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Section;
