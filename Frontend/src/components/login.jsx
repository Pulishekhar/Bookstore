import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from 'axios';
import { toast } from "react-hot-toast"; // Import toast for notifications
import { useAuth } from "../context/AuthProvider"; // Import useAuth

function Login({ isOpen, onClose }) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate(); // To navigate after login
  const { setAuthUser } = useAuth(); // Get setAuthUser from useAuth

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password
    };

    console.log("User Info to be sent:", userInfo);

    try {
      const res = await axios.post("http://localhost:4001/user/login", userInfo);
      console.log(res.data);
      if (res.data) {
        toast.success('Logged in Successfully');
        localStorage.setItem("Users", JSON.stringify(res.data.user));
        setAuthUser(res.data.user); // Update authUser state
        navigate('/'); // Redirect to home after login
        onClose(); // Close modal after successful login
      }
    } catch (err) {
      if (err.response) {
        console.log(err);
        toast.error("Error: " + err.response.data.message);
      }
    }
  };

  const handleCloseModal = () => {
    if (onClose) onClose(); // Close the modal using the passed function
  };

  return (
    <div>
      {/* Modal for Login */}
      {isOpen && (
        <dialog className="modal" open>
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)}>
              <button
                type="button"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={handleCloseModal}
              >
                ✕
              </button>
              <h3 className="font-bold text-lg">Login</h3>
              <div className="mb-4">
                <span className="block mb-1">Email</span>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-sm text-red-500">This field is required</span>
                )}
              </div>
              <div className="mb-4">
                <span className="block mb-1">Password</span>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="input input-bordered w-full"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-sm text-red-500">This field is required</span>
                )}
              </div>
              <div className="flex justify-around mt-4">
                <button
                  type="submit"
                  className="bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-700"
                >
                  Login
                </button>
                <p>
                  <Link to="/signup" className="cursor-pointer hover:text-blue-500">
                    Signup
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </dialog>
      )}
    </div>
  );
}

export default Login;
