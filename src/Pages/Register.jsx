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
          <div className=" space-y-3">
            {/* placeholder 1*/}
            <div>
              <h1 className="text-lg opacity-85 font-normal ">Full Name</h1>
              <input
                type="text"
                placeholder="user name "
                className="  p-2  outline-none w-96 rounded-2xl"
              />
            </div>

            {/* placeholder 2 */}
            <div>
              <h1 className="text-lg opacity-85 font-normal ">Email Address</h1>
              <input
                type="text"
                placeholder="name@gmail.com"
                className="  p-2  outline-none w-96 rounded-2xl"
              />
            </div>

            <div>
              <h1 className="text-lg opacity-85 font-normal ">Phone No</h1>
              <input
                type="text"
                placeholder="+92"
                className="  p-2  outline-none w-96 rounded-2xl"
              />
            </div>

            <div>
              <p className="text-lg  font-normal opacity-85">Password</p>
              <input
                className="  p-2 text-gray-600 outline-none w-96 rounded-2xl"
                type="password"
                placeholder=" enter password"
              />
            </div>
          </div>

          {/*forget  */}
          <div className="pr-72 pt-3">
            <h1 className="text-[12px] text-gray-800">Forget Password?</h1>
          </div>

          {/* button */}
          <div className="flex gap-6">
            <div className="py-2 px-16 rounded-2xl bg-[rgb(37,136,157)] mt-4 text-white">
              <button>Continue</button>
            </div>
            <Link to="/dashboard">
              <div className="py-2 px-16 rounded-2xl bg-[rgb(37,136,157)] mt-4 text-white">
                <button>Next</button>
              </div>
            </Link>
          </div>

          <h1 className="pr-56 text-[12px] pt-4 pb-5">
            Already have an account?{" "}
            <Link to="/">
              <span className="text-gray-500">Login</span>
            </Link>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Register;
