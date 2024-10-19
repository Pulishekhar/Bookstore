import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Log the form data
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-200">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <h3 className="font-bold text-lg mb-4">Sign Up</h3>
        <form onSubmit={handleSubmit(onSubmit)} method="post">
          <div className="mb-4">
            <label className="block mb-1" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your fullname"
              className="input input-bordered w-full"
              {...register("name", { required: true })}
            />
            <br />
            {errors.name && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              {...register("email", { required: true })}
            />
            <br />
            {errors.email && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
              {...register("password", { required: true })}
            />
            <br />
            {errors.password && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>

          <div className="flex justify-between items-center">
            <button type="submit" className="bg-blue-400 text-white rounded-md px-3 py-1 hover:bg-blue-700">
              Sign Up
            </button>
            <p>
              Have an account?{' '}
              {/* Use Link to navigate to the Login page */}
              <Link to="/login" className="cursor-pointer hover:text-blue-500">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
