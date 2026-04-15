import React from "react";
import { BiMessageCheck } from "react-icons/bi";
import { FaCalendarCheck, FaLandmark, FaLongArrowAltLeft, FaLongArrowAltRight,  } from "react-icons/fa";
import { LuMessageSquareWarning } from "react-icons/lu";
import { MdOutlineErrorOutline, MdOutlinePersonOff } from "react-icons/md";
const AdminDashboard = () => {
  return (
    <div className="ml-[250px] bg-[#d3e3ef] pl-5 ]">
      <div className=" pt-20">
        <h1 className="font-bold  text-[30px]">Admin Dashboard</h1>
      </div>

        <div className="  bg-[rgb(230,238,243)] px-5  mr-4  rounded-3xl mt-7  border border-white  p-2">
            <div className=" text-[25px] py-3 font-bold">
             <h1>Business Overview</h1>
            </div>

            <div className="grid grid-cols-3 gap-5 ">


{/* card1 */}
                <div className=" bg-[rgb(255,255,255)]  rounded-2xl">
                    <div className="flex">
                        <div  className="pl-7 font-bold pt-5 ">
                            <h1 className="text-[#827ca6] text-[20px]">Total Business</h1>
                            <h2 className="pt-3">223</h2>
                        </div>
                        <div className="bg-[#c3f1f2] text-[#25889d] p-5 rounded-2xl  mt-5 ml-20 text-[20px]">
                           <FaLandmark />
                        </div>
                    </div>
                    <div className="flex justify-center items-center my-7 text-[18px]">
                       <FaLongArrowAltRight  className="text-[#1bac2c]" />
                       <h1 className="text-[#a5a1bf] font-bold"><span className="text-[#1bac2c]">8.5%</span>Up from yesterday</h1>
                    </div>
                </div>

{/* Card2 */}
                <div className=" bg-[rgb(255,255,255)]  rounded-2xl">
                    <div className="flex">
                        <div  className="pl-7 font-bold pt-5 ">
                            <h1 className="text-[#827ca6] text-[20px]">Monthly Revenue</h1>
                            <h2 className="pt-3">80,000</h2>
                        </div>
                        <div className="bg-[#c3f1f2] text-[#25889d] p-5 rounded-2xl  mt-5 ml-12 text-[20px]">
                            <FaCalendarCheck />
                        </div>
                    </div>
                    <div className="flex justify-center items-center my-7 text-[18px]">
                       <FaLongArrowAltRight className="text-[#1bac2c]" />
                       <h1 className="text-[#a5a1bf] font-bold"><span className="text-[#1bac2c]">1.8%</span>Up from yesterday</h1>
                    </div>
                </div>

{/* card3 */}
                <div className=" bg-[rgb(255,255,255)]  rounded-2xl">
                    <div className="flex">
                        <div  className="pl-7 font-bold pt-5 ">
                            <h1 className="text-[#827ca6] text-[20px]">Active Subscription</h1>
                            <h2 className="pt-3">223</h2>
                        </div>
                        <div className="bg-[#c3f1f2] text-[#25889d] p-5 rounded-2xl  mt-5 ml-12 text-[20px]">
                           <BiMessageCheck   />
                        </div>
                    </div>
                    <div className="flex justify-center items-center my-4 text-[18px]">
                       <FaLongArrowAltRight className="text-[#1bac2c]" />
                       <h1 className="text-[#a5a1bf] font-bold"><span className="text-[#1bac2c]">8.5%</span>Up from yesterday</h1>
                    </div>
                </div>


            </div>

 
            <div className="grid grid-cols-3 gap-5  my-5 ">


{/* card1 */}
                <div className=" bg-[rgb(255,255,255)]  rounded-2xl">
                    <div className="flex">
                        <div  className="pl-7 font-bold pt-5 ">
                            <h1 className="text-[#827ca6] text-[20px]">Super Tickets</h1>
                            <h2 className="pt-3">154</h2>
                        </div>
                        <div className="bg-[#c3f1f2] text-[#25889d] p-5 rounded-2xl  mt-5 ml-20 text-[20px]">
                           <LuMessageSquareWarning />
                        </div>
                    </div>
                    <div className="flex justify-center items-center my-7 text-[18px]">
                       <FaLongArrowAltLeft    className="text-[red]" />
                       <h1 className="text-[#a5a1bf] font-bold"><span className="text-[red]">4.3%</span>Down from yesterday</h1>
                    </div>
                </div>

{/* Card2 */}
                <div className=" bg-[rgb(255,255,255)]  rounded-2xl">
                    <div className="flex">
                        <div  className="pl-7 font-bold pt-5 ">
                            <h1 className="text-[#827ca6] text-[20px]">Block Users</h1>
                            <h2 className="pt-3">45</h2>
                        </div>
                        <div className="bg-[#c3f1f2] text-[#25889d] p-5 rounded-2xl  mt-5 ml-28 text-[20px]">
                            <MdOutlineErrorOutline  />
                        </div>
                    </div>
                    <div className="flex justify-center items-center my-7 text-[18px]">
                       <FaLongArrowAltRight  className="text-[#1bac2c]" />
                       <h1 className="text-[#a5a1bf] font-bold"><span className="text-[#1bac2c]">4.3%</span>Up from yesterday</h1>
                    </div>
                </div>

{/* card3 */}
                <div className=" bg-[rgb(255,255,255)]  rounded-2xl">
                    <div className="flex">
                        <div  className="pl-7 font-bold pt-5 ">
                            <h1 className="text-[#827ca6] text-[20px]">Pending Request</h1>
                            <h2 className="pt-3">223</h2>
                        </div>
                        <div className="bg-[#c3f1f2] text-[#25889d] p-5 rounded-2xl  mt-5 ml-20 text-[20px]">
                           <MdOutlinePersonOff   />
                        </div>
                    </div>
                    <div className="flex justify-center items-center my-4 text-[18px]">
                       <  FaLongArrowAltLeft className="text-[#1bac2c]" />
                       <h1 className="text-[#a5a1bf] font-bold"><span className="text-[red]">29%</span>Down from yesterday</h1>
                    </div>
                </div>


            </div>
        </div>
    </div>
  );
};

export default AdminDashboard;
