import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaEyeSlash, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      {/* pura screen ka color  */}
      <div className="bg-[rgb(229,252,254)] min-h-screen flex items-center justify-center">
        {/* img & text */}
        <div className="bg-[rgb(233,245,247)] w-[600px]   rounded-3xl items-center justify-center flex flex-col border-2 border-white">
          <div className="justify-center flex flex-col items-center">
            <img className="w-20 h-20 mt-10 " src="Logo.png" alt="" />
            <h1 className="text-[30px]">
              {" "}
              <span className="text-[rgb(15,200,202)]">Register</span> to Codes
              Vista PMS
            </h1>
          </div>

          {/* placeholder 1*/}
          <div className="pt-5">
            <h1 className="text-[15px] text-gray-700">Full Name</h1>
            <input
              type="text"
              placeholder="user name "
              className="w-96 p-2 rounded-2xl"
            />
          </div>

          {/* placeholder 2 */}
          <div className="pt-5 ">
            <h1 className="text-[15px] text-gray-700">Email Address</h1>
            <input
              type="text"
              placeholder="name@gmail.com"
              className="w-96 p-2 rounded-2xl"
            />
          </div>

          <div className="pt-5 ">
            <h1 className="text-[15px] text-gray-700">Phone No</h1>
            <input
              type="text"
              placeholder="+92"
              className="w-96 p-2 rounded-2xl"
            />
          </div>

          <div className="pt-5 ">
            
           <p className="text-lg opacity-50 font-normal text-gray-700">Password</p>
            <input
            className="  p-2 mb-4 outline-none w-96 rounded-2xl"
            type="password"
            placeholder=" enter password"
      
          />
          </div>
          {/*forget  */}
          <div className="pr-72 pt-3">
            <h1 className="text-[12px] text-gray-800">Forget Password?</h1>
          </div>

          {/* button */}
          <div className="py-2 px-44 rounded-2xl bg-[rgb(37,136,157)] mt-4 text-white">
            <button>Continue</button>
          </div>

          <h1 className="pr-56 text-[12px] pt-4 pb-5">
            Already have an account?{" "}
            <Link to = "/">
              <span className="text-gray-500">Login</span>
            </Link>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Register;
