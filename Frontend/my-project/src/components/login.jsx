import React from 'react';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    handleCloseModal(); // Close modal after successful login
  };

  const handleCloseModal = () => {
    const modal = document.getElementById('my_modal_3');
    if (modal) {
      modal.close(); // Close the modal
    }
  };

  return (
    <div>
      {/* Modal for Login */}
      <dialog id="my_modal_3" className="modal">
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
              <br />
              <input
                type="email"
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
              <span className="block mb-1">Password</span>
              <br />
              <input
                type="password"
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
            <div className="flex justify-around mt-4">
              <button
                type="submit"
                className="bg-blue-400 text-white rounded-md px-3 py-1 hover:bg-blue-700"
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
    </div>
  );
}

export default Login;
