import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateSignup = () => {
    const newErrors = {};
    const { name, email, password, confirmPassword } = formData;

    if (!name.trim()) {
      newErrors.name = "Name is required";
    } else if (name.length < 3) {
      newErrors.name = "Name must be at least 3 Characters";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      newErrors.email = "Invalid email format";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateSignup()) return;

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        formData
      );
      console.log(response.data);
    } catch (error) {
      setErrors({
        server: error.response?.data?.message || "Signup failed",
      });
    }
  };

  return (
    <div className="flex flex-col items-center h-screen justify-center bg-gradient-to-b from-teal-600 from-50% to-gray-100 to-50% space-y-6 ">
      <div className="bg-white shadow-lg rounded p-6 w-88">
        <h1 className="text-2xl font-bold mb-4">Signup</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="name"
              className="border-gray-200 w-full px-3 py-2 bg-slate-100 rounded"
              placeholder="Enter name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          {errors.name && <p className="text-red-500">{errors.name}</p>}
          <div className="mb-4">
            <input
              type="email"
              name="email"
              className="border-gray-200 w-full px-3 py-2  bg-slate-100 rounded"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          {errors.email && <p className="text-red-500">{errors.email}</p>}
          <div className="mb-4">
            <input
              type="password"
              name="password"
              className="border-gray-200 w-full px-3 py-2 bg-slate-100 rounded"
              placeholder="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          {errors.password && <p className="text-red-500">{errors.password}</p>}
          <div className="mb-8">
            <input
              type="password"
              name="confirmPassword"
              className="border-gray-200 w-full px-3 py-2 bg-slate-100 rounded"
              placeholder="confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
          {errors.confirmPassword && (
            <p className="text-red-500">{errors.confirmPassword}</p>
          )}

          {errors.server && <p className="text-red-500">{errors.server}</p>}

          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-2"
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
