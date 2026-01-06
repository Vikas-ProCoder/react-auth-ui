import React from "react";

const Signup = () => {
  return (
    <div className="flex flex-col items-center h-screen justify-center bg-gradient-to-b from-teal-600 from-50% to-gray-100 to-50% space-y-6 ">
      <div className="bg-white shadow-lg rounded p-6 w-88">
        <h1 className="text-2xl font-bold mb-4">Signup</h1>

        <form>
          <div className="mb-4">
            <input
              type="text"
              className="border-gray-200 w-full px-3 py-2 bg-slate-100 rounded"
              placeholder="Enter name"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              className="border-gray-200 w-full px-3 py-2  bg-slate-100 rounded"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              className="border-gray-200 w-full px-3 py-2 bg-slate-100 rounded"
              placeholder="password"
            />
          </div>
          <div className="mb-8">
            <input
              type="password"
              className="border-gray-200 w-full px-3 py-2 bg-slate-100 rounded"
              placeholder="confirm password"
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-2"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
