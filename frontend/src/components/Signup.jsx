import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Login from './Login';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from=location.state?.from?.pathname || "/"
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

    const onSubmit = async data => {
        const useruserInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password
        };
        await axios.post("https://bookstoreapp-backend-djr2.onrender.com/user/signup", useruserInfo)
        .then((res) => {
          console.log("✅ Server response:", res.data);
          if (res.data.user) {
            localStorage.setItem("Users", JSON.stringify(res.data.user));
            toast.success("Signup Successfully");
            navigate(from, { replace: true });
          } else {
            console.warn("No user object in response");
          }
          localStorage.setItem("Users",JSON.stringify(res.data.user));
        }).catch((err) => {
          if (err.response) {
            console.log(err);
            toast.error("Error: " + err.response.data.message);
          } })
        // You can now send `data` to your backend
};
  return (
    <div className='flex h-screen items-center justify-center bg-gray-100 dark:bg-gray-900'>
      <div className="border-[2px] shadow-md p-5 rounded-md w-[600px] relative bg-white text-black dark:bg-slate-800 dark:text-white dark:border-gray-700">
        {/* Close button */}
        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

        <h3 className="font-bold text-lg">Signup</h3>

        {/* ✅ FORM STARTS HERE */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name */}
          <div className='mt-4 space-y-2'>
            <span>Name</span>
            <br />
            <input
              type="text"
              placeholder='Enter your fullname'
              {...register("fullname", { required: "Name is required" })}
              className='w-full px-3 py-2 border rounded-md outline-none bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white'
            /><br/>
            {errors.fullname && <p className="text-red-500 text-sm">{errors.fullname.message}</p>}
          </div>

          {/* Email */}
          <div className='mt-4 space-y-2'>
            <br/>
            <span>Email</span>
            <input
              type="email"
              placeholder='Enter your email'
              {...register("email", { required: "Email is required" })}
              className='w-full px-3 py-2 border rounded-md outline-none bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white'
            /><br />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div className='mt-4 space-y-2'>
            <span>Password</span>
            <br />
            <input
              type="password"
              placeholder='Enter your password'
              {...register("password", { required: "Password is required" })}
              className='w-full px-3 py-2 border rounded-md outline-none bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white'
            /><br />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          {/* Submit + Login prompt */}
          <div className='flex justify-between items-center mt-6'>
            <button type="submit" className='bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 duration-200'>
              Signup
            </button>

            <p className='text-md'>
              Already registered?
              <button
                type="button"
                className='underline text-blue-500 ml-2'
                onClick={() => document.getElementById("my_modal_3").showModal()}
              >
                Login
              </button>
            </p>
          </div>
        </form>
        {/* ✅ FORM ENDS HERE */}

        {/* Login modal */}
        <Login />
      </div>
    </div>
  );
};

export default Signup;
