// import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center h-screen justify-center bg-gradient-to-b from-teal-600 from-50% to-gray-100 to-50% space-y-6">
      <div className="shadow-lg rounded p-6 w-88 bg-white">
        <h1 className="text-2xl font-bold mb-4">Login</h1>

        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email:
            </label>
            <input
              className="border-gray-200 w-full px-3 py-2"
              type="email"
              placeholder="Enter Email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700">
              Password:
            </label>
            <input
              className="border-gray-200 w-full px-3 py-2"
              type="password"
              placeholder="Enter Password"
            />
          </div>
          <div className="mb-8">
            <a
              href="#"
              className="block w-fit text-xs ml-auto hover:underline hover:text-red-600"
            >
              Forgot password
            </a>
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

export default Login;
