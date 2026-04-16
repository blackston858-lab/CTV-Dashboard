import React from 'react'
import Sidebar from '../Components/Sidebar'
import { LuBuilding2 } from 'react-icons/lu'

const Branch_mangement = () => {
  return (
    <div className='flex bg-[#d4e4f0] h-screen '>
      <div className='w-[20%]'>
         <Sidebar />
      </div>

      <div className='w-[80%] p-8'>

        {/* main content */}
       <div className='p-4'>
        <h1 className='text-3xl font-bold text-gray-800 '>Branch Management</h1>
       </div>

       {/* branch overview  */}
       <div className='bg-[#e2e9f0] p-4 rounded-lg border border-white  '>

          <h2 className='text-2xl font-semibold text-gray-700 mb-4'>Branch Overview</h2>

          {/* card grid */}

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                 {/* card 1  */}
            <div className='bg-[#f5f5f5] p-4 py-8 gap-3 rounded-lg flex items-center justify-around border border-white '>
              <div >
              <h1 className='text-[24px] font-bold text-[#bceaea]'>Total registered Branches</h1>
              <p className='text-xl font-bold text-gray-800'>122</p>
            </div>
            <div className='text-3xl p-2 bg-[#bceaea] rounded-lg'>
                 <p className='text-[#25889d] '><LuBuilding2 /></p>
            </div>
            </div>

          </div>

       </div>

      </div>
    </div>
  )
}

export default Branch_mangement
