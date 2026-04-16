import React from 'react'
import Login from '../Pages/Login'
import { Link } from 'react-router'

const Sidebar = () => {
  return (
    <div  >
      <div className='bg-[#d7e3ef] border  border-[white]  flex flex-col items-center justify-center h-screen  '>
         <div className='w-20 h-20 mb-8'>
          <img src="./Logo.png" alt="logo"/>
         </div>

         <div className='space-y-4 flex flex-col justify-center  '>

          <h1 className='bg-white px-4 py-3 text-xl  font-medium hover:border-white  hover:text-white  duration-300 transition-all  hover:bg-[#25889d] rounded-lg'>Dashboard</h1>
          <Link to="/branch">           <h1 className='bg-white px-4 py-3 text-xl  font-medium hover:border-white  hover:text-white  duration-300 transition-all  hover:bg-[#25889d] rounded-lg'>Branch Management</h1>
</Link>
          <h1 className='bg-white px-4 py-3 text-xl  font-medium hover:border-white  hover:text-white  duration-300 transition-all  hover:bg-[#25889d] rounded-lg'>Inventory / Products </h1>
          <h1 className='bg-white px-4 py-3 text-xl  font-medium hover:border-white  hover:text-white  duration-300 transition-all  hover:bg-[#25889d] rounded-lg'>Staff & HR</h1>
          <h1 className='bg-white px-4 py-3 text-xl  font-medium hover:border-white  hover:text-white  duration-300 transition-all  hover:bg-[#25889d] rounded-lg'>Subcribtion & billing</h1>
          <h1 className='bg-white px-4 py-3 text-xl  font-medium hover:border-white  hover:text-white  duration-300 transition-all  hover:bg-[#25889d] rounded-lg'>Global settings</h1>
          
         </div>

      </div>
      </div>
  )
}

export default Sidebar
