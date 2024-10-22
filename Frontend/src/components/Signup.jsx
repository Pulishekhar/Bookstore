import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from || "/"; // Make sure to use the correct path here
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    console.log("User Info to be sent:", userInfo);

    await axios.post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup Successfully");
          navigate(from, { replace: true }); // Use navigate here
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.error(err);
          toast.error("Error: " + err.response.data.message);
        }
      });
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-200">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm relative">
        <button
          className="absolute right-2 top-2 text-gray-400 hover:text-gray-600"
          onClick={() => window.history.back()}
        >
          ✕
        </button>

        <h3 className="font-bold text-lg mb-4">Sign Up</h3>
        <form onSubmit={handleSubmit(onSubmit)} method="post">
          <div className="mb-4">
            <label className="block mb-1" htmlFor="fullname">Name</label>
            <input
              type="text"
              placeholder="Enter your fullname"
              className="input input-bordered w-full"
              {...register("fullname", { required: true })}
            />
            <br />
            {errors.fullname && (
              <span className="text-sm text-red-500">This field is required</span>
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
              <span className="text-sm text-red-500">This field is required</span>
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
              <span className="text-sm text-red-500">This field is required</span>
            )}
          </div>

          <div className="flex justify-between items-center">
            <button type="submit" className="bg-blue-400 text-white rounded-md px-3 py-1 hover:bg-blue-700">
              Sign Up
            </button>
            <p>
              Have an account?{' '}
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
