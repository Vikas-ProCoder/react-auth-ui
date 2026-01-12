import React, { useState } from "react";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
  };
  console.log("data login", data);
  return (
    <div className="flex flex-col items-center h-screen justify-center bg-gradient-to-b from-teal-600 from-50% to-gray-100 to-50% space-y-6">
      <div className="shadow-lg rounded p-6 w-88 bg-white">
        <h1 className="text-2xl font-bold mb-4">Login</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email:
            </label>
            <input
              className="border-gray-200 w-full px-3 py-2"
              type="email"
              name="email"
              value={data.email}
              onChange={handleOnChange}
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
              name="password"
              value={data.password}
              onChange={handleOnChange}
              placeholder="Enter Password"
            />
          </div>
          <div className="mb-8">
            <a
              href="#"
              className="block mt-2 w-fit text-xs ml-auto hover:underline hover:text-red-600"
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
