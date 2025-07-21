import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';

function Login() { 
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit =async (data) => {
    const useruserInfo = {
      
      email: data.email,
      password: data.password
  };
    await axios.post("https://bookstoreapp-backend-djr2.onrender.com/user/login", useruserInfo)
      .then((res) => {
        console.log("✅ Server response:", res.data);
        if (res.data.user) {
          localStorage.setItem("Users", JSON.stringify(res.data.user));
         
          toast.success("Loggedin Successfully");
          document.getElementById("my_modal_3").close();
          setTimeout(() => {
            window.location.reload();
            localStorage.setItem("Users", JSON.stringify(res.data.user));
          },1000)
          
        } else {
          console.warn("No user object in response");
        }
        
      }).catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
          setTimeout(()=>{},1000)
        }
      });
  }
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-white dark:bg-gray-900 dark:text-white">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* Close Button */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg mb-4">Login</h3>

            {/* Email */}
            <div className="mt-4 space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-2 border rounded-md outline-none bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-500">This field is required</span>
              )}
            </div>

            {/* Password */}
            <div className="mt-4 space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-2 border rounded-md outline-none bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span className="text-sm text-red-500">This field is required</span>
              )}
            </div>

            {/* Buttons */}
            <div className="flex justify-around mt-6">
              <button
                type="submit"
                className="bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 duration-200"
              >
                Login
              </button>
              <p className="text-sm">
                Not registered?{" "}
                <Link
                  to="/signup"
                  className="underline text-blue-500 dark:text-blue-400"
                >
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
