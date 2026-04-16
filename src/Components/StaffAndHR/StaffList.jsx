import React from "react";
import { CiCirclePlus, CiFilter, CiSearch } from "react-icons/ci";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { StaffListData } from "../../Data/StaffListData";

const StaffList = () => {
  return (
    <div className="w-[1100px] px-8 mx-auto">
      <div className="  bg-[rgb(230,238,243)] px-5  mr-4  rounded-3xl mt-7  border border-white  p-2">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div className=" text-[25px] py-3 font-semibold">
            <h1>Staff List</h1>
          </div>
          <div className="flex gap-3">
            {/* Search */}
            <div className="bg-[#f5f5f5] rounded-xl border border-white h-[45px] w-[100px] flex gap-1 m-auto items-center px-3">
              <CiSearch size={25} />
              <input
                type="text"
                placeholder="Search"
                className="w-[50px] h-[40px] rounded-xl bg-[#f5f5f5]"
              />
            </div>

            {/* Button */}
            <div className="bg-[#f5f5f5] w-[180px] h-[40x] p-3 flex items-center justify-between rounded-xl border border-white">
              <p className="text-[14px] font-[500] text-[#1C1B1F]">
                Add Employee
              </p>
              <CiCirclePlus size={20} />
            </div>
          </div>
        </div>

        {/* Staff List Filter */}
        <div className="bg-[#f5f5f5] grid grid-cols-5  rounded-xl w-[1000px] h-[70px]">
          <div className="flex justify-between items-center p-5 border border-r-[#d0cfd0]">
            <CiFilter size={30} />
            <p className="text-[#1C1B1F] font-[700]">Filter By</p>
          </div>
          <div className="flex justify-between items-center p-5 border border-r-[#d0cfd0]">
            <p className="text-[#1C1B1F] font-[500]">Department</p>
            <IoIosArrowDown size={20} />
          </div>
          <div className="flex justify-between items-center p-5 border border-r-[#d0cfd0]">
            <p className="text-[#1C1B1F] font-[500]">Job Type</p>
            <IoIosArrowDown size={20} />
          </div>
          <div className="flex justify-between items-center p-5 border border-r-[#d0cfd0]">
            <p className="text-[#1C1B1F] font-[500]">Join Date</p>
            <IoIosArrowDown size={20} />
          </div>
          <div className="flex justify-between items-center p-5 text-[#DC2626]">
            <FaArrowRotateLeft />
            <p className="text-[#1C1B1F] font-[500]">Reset Status</p>
          </div>
        </div>

        {/* Staff List  */}
        <div className=" rounded-xl">
          {/* Staff List Header */}
          <div className="bg-[#f5f5f5]"></div>

          {/* Staff List Table */}
          <div className="grid grid-rows-6 gap-2 my-4">
            {StaffListData.map((item, index) => {
              return (
                    <div className="bg-[#f5f5f5] flex w-[950px] h-[90px] mx-auto rounded-3xl items-center border border-white p-5 justify-between" key={index}>
                  <div className="flex gap-2 items-center">
                    <img src={item.image} alt="" className="w-9 h-9 rounded-full" />
                        <p className="text-[16px] text-[#1C1B1F] font-[500]">{item.name}</p>
                  </div>
                  <div className="flex gap-5">
                    <h1 className="text-[16px] text-[#1C1B1F] font-[500]">{item.title}</h1>
                  <h2 className="text-[16px] text-[#1C1B1F] font-[500]">{item.department}</h2>
                  <h3 className="text-[16px] text-[#1C1B1F] font-[500]">{item.type}</h3>
                  <h4 className="text-[16px] text-[#1C1B1F] font-[500]">{item.joindate}</h4>
                  </div>
                  <div className="bg-[#16a34a] w-[80px] h-[25px] rounded-2xl items-center" >
                    <p className={`text-[16px] text-[#1C1B1F] font-[500] text-center`}>{item.status}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffList;
