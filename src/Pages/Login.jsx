import { BsFacebook } from "react-icons/bs"; 
import { FcGoogle } from "react-icons/fc"; 
import { BsGoogle } from "react-icons/bs"; 
 import React from 'react'
 
 const Login = () => {
   return (

      // ye iss ke main div ha iss ka funtion login screen k bg ko color dena ha
     <div className='bg-[#d7e8f3] flex items-center justify-center h-screen w-screen'>
        {/* Login Screen Background aur login card ka kaam kra ga ya ye card ke main div ha iss k andar ab sara content ayyy ga  */}
      <div className=' border border-white rounded-3xl bg-[rgb(234,246,247)] px-16 py-16  '>
           {/*iss div main image aur text ayy ga   */}
            <div className='flex flex-1 flex-col items-center gap-10'>
              <img className='w-20 h-20 ' src="https://codesvista.com/wp-content/uploads/2025/02/CODVISTA_3_page-0001-removebg-preview-1.png" alt="logo"/>

              <h1 className='text-2xl font-medium '> <span className='text-[#0fc8ca]'>Login</span> as  Admin</h1>


            </div>

            {/* email, password etc div */}
            <div className='mt-4 space-y-2 '>
              <p className="text-lg opacity-50 font-normal">
                Email
              </p>
              <input className='w-96  rounded-lg p-2 mb-4 outline-none' type="email" placeholder='name@email.com' />

              <p className="text-lg opacity-50 font-normal">
                Password
              </p>
              <input className='w-full  rounded-lg p-2 mb-4 outline-none' type="password" placeholder='password' />
              <p className="text-sm opacity-80  ">
                Forgot password?
              </p>
              

            </div>

            <div className="flex justify-center mt-4">
              <button className='bg-[#25889d] text-white py-2 px-44  rounded-lg hover:bg-[#0eaaae]'>
                Login
              </button>
            </div>
            <div className="flex justify-center gap-2 items-center mt-4">
              <p className="flex items-center opacity-75 text-sm gap-2 border border-white rounded-xl p-2"><FcGoogle  size={20} /> Continue with google</p><p className="flex items-center opacity-75 text-sm gap-2 border border-white rounded-xl p-2"><BsFacebook size={20} color="blue"/>Continue with facebook</p>
            </div>
      </div>
      
     </div>
   )
 }
 
 export default Login

