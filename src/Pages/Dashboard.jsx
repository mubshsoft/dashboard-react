import React from 'react';
import { RiArrowDownSFill, RiArrowUpSFill, RiTimeLine } from 'react-icons/ri';
import { IoMdArrowForward } from 'react-icons/io';
import { PiVideoCameraThin } from 'react-icons/pi'
import BarChartComponent from '../components/BarChartComponent';
import MyCalendar from '../components/MyCalendar';
import { Space } from 'antd';
import TransactionHistory from '../components/TransactionHistory';
const onClick = ({ key }) => {
  message.info(`Click on item ${key}`);
};


const Dashboard = () => {

  const avatarCount = 3; // Number of avatars

  const avatars = Array.from({ length: avatarCount }, (_, index) => (
    <img
      key={index}
      src="https://www.pngkey.com/png/full/72-729716_user-avatar-png-graphic-free-download-icon.png"
      className={`w-[40px] ${index > 0 ? '-ml-5' : ''}`}
      alt={`Avatar ${index + 1}`}
    />
  ));
  return (
    <>
      {/* bg-[#6e62e5] */}
      <div className="md:flex m-4 gap-5">
        {/* First Card (Column Span 10 on medium screens, Column Span 2 on small and large screens) */}
        <div className="w-full md:w-full rounded-2xl lg:w-9/12 p-4 bg-[#6e62e5]">
          <div className="flex flex-wrap">
            {Array.from({ length: 3 }, (_, index) => (
              <div key={index} className="w-full md:w-full lg:w-1/3 p-1">
                <div className="p-2">
                  <div className="flex items-center justify-center gap-3">
                    <img
                      src="https://www.pngkey.com/png/full/72-729716_user-avatar-png-graphic-free-download-icon.png"
                      className="w-[50px]"
                      alt="Avatar"
                    />
                    <div>
                      <p className="py-1 text-slate-100">Monthly {["Revenue", "Sales", "Profit"][index]}</p>
                      <p className="py-1 text-xl text-white font-semibold">$3,500 <span className="bg-white rounded-full px-2 py-1 text-sm font-semibold text-[#6e62e5]">+2.4%</span></p>
                      <p className="text-xs text-slate-100">Previous month <span className="text-white rounded-full px-2 ml-2 text-sm font-semibold">$1.7k</span></p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* <!-- Second Card (Column Span 2 on medium screens, Column Span 2 on small and large screens) --> */}
        <div className="w-full md:w-full lg:w-3/12 px-3">
          <div className="bg-white">
            <h6 className="text-[#6e62e5]">Premium Access</h6>
            <div className="lg:relative md:flex-col">
              <h1 className="lg:text-3xl md:text-xl font-semibold custom font-custom">
                Take Back<br /> Your Creative <br />Control
              </h1>
              <div className="flex flex-wrap -mx-2 lg:absolute lg:right-0 bottom-0 xl:right-20">
                {avatars}
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* second div */}
      <div className="md:flex">
        {/* <!-- First Card (Column Span 10 on medium screens, Column Span 2 on small and large screens) --> */}
        <div className="w-full md:w-9/12 lg:w-9/12 px-4">
          <div className="bg-white rounded-md  p-4 border border-gary-200">
            <div className="flex flex-wrap">
              {/* <!-- First Card (Full width on small screens, 1/2 width on medium screens, 1/3 width on large screens) --> */}
              <div className="w-full md:w-1/2 lg:w-1/2">
                <div className="flex flex-col justify-between h-[150px]">
                  <div>
                    <p className="text-black font-semibold text-lg -mb-1">Top Sales & Cost</p>
                    <span className="text-gray-400 text-xs">Last 60 days</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <h2 className="text-[#6e62e5] font-bold text-4xl">$956.82K</h2>
                    <div className="bg-green-200 rounded-3xl px-4 py-1 w-[100px] h-[25px] flex items-center text-green-500 font-semibold font-custom">
                      <RiArrowUpSFill />+5.4%
                    </div>
                  </div>
                </div>

              </div>

              {/* <!-- Second Card (Full width on small screens, 1/2 width on medium screens, 1/3 width on large screens) --> */}
              <div className="w-full md:w-1/2 lg:w-1/2">
                <div className="rounded-md">
                  <div className="flex items-center justify-between px-10">
                    <div className='text-black font-semibold font-custom text-sm'>Analytic<span className='text-green-400 font-semibold text-sm ml-2'>+5.4%</span></div>
                 
                    <div className='text-black font-semibold font-custom flex items-center cursor-pointer text-xs'>Month <RiArrowDownSFill /></div>
                   
                  </div>
                  <BarChartComponent />
                </div>
              </div>

              {/* <!-- Third Card (Full width on small screens, 1/2 width on medium screens, 1/3 width on large screens) --> */}

            </div>
          </div>
        </div>

        {/* <!-- Second Card (Column Span 2 on medium screens, Column Span 2 on small and large screens) --> */}
        <div className="w-full md:w-3/12 lg:w-3/12 px-4">
          <div className="bg-white rounded-md p-4">
            <div>
              <div className='text-gray-500 font-semibold  flex items-center cursor-pointer text-sm'>The Professional Platform <RiArrowDownSFill /></div>
              <div className='flex justify-between text-[#6e62e5] mt-5 text-lg border border-gray-300 py-1 px-4 rounded-xl cursor-pointer'>
                <button>
                  Upgrade Now
                </button>
                <IoMdArrowForward className='text-2xl ' />
              </div>
            </div>

            <div className="flex justify-center items-center mt-5">
              <MyCalendar />
            </div>
          </div>
        </div>
      </div>

      <div className='bg-red-400'>
        {/* <ResponsiveTable /> */}
      </div>

      <div className="md:flex">
        {/* <!-- First Card (Column Span 10 on medium screens, Column Span 2 on small and large screens) --> */}
        <div className="w-full md:w-9/12 lg:w-9/12 p-4">
          <TransactionHistory />
        </div>
        <div className='w-full md:w-full lg:w-3/12 px-3 mt-10'>
          <div className='flex gap-4 items-center'>
            <div><img src="https://demos.creative-tim.com/notus-js/assets/img/team-1-800x800.jpg" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow" /></div>
            <div>
              <p className='font-semibold text-sm mb-1'> Meeting with Client</p>
              <div className='flex justify-between items-center gap-10 text-xs text-gray-500'>
                <p className='flex items-center gap-1'><PiVideoCameraThin /> meet</p>
                <p className='flex items-center gap-1'><RiTimeLine /> 12Pm</p>
              </div>
            </div>
          </div>
          <div className='border-b border-gray-300 mt-5'>
          </div>
          <div className='flex gap-4 items-center mt-5'>
            <div><img src="https://img.freepik.com/premium-photo/3d-render-stack-brightly-colored-books-with-bookmark-pile-textbooks-notebooks-books-symbol-learning-school-business-isolated-illustration-gray-background_172597-1789.jpg" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow" /></div>
            <div>
              <p className='font-semibold text-sm mb-1'> Weekly Report</p>
              <div className='flex justify-between items-center gap-10 text-xs text-gray-500'>
                <p className='flex items-center gap-1'><PiVideoCameraThin /> meet</p>
                <p className='flex items-center gap-1'><RiTimeLine /> 03Pm</p>
              </div>
            </div>
          </div>
          <div className='border-b border-gray-300 mt-5'>
          </div>
          <div className='flex gap-4 items-center mt-5'>
            <div><img src="https://media.istockphoto.com/id/1128342917/photo/mock-up-magazines-book-or-catalog-on-white-background.jpg?s=612x612&w=0&k=20&c=eRcNkG6718RwXcBIk6EXKDVjve61jQeHLwuvuKQm0zw=" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow" /></div>
            <div>
              <p className='font-semibold text-sm mb-1'> Daily Scrum Meeting</p>
              <div className='flex justify-between items-center gap-10 text-xs text-gray-500'>
                <p className='flex items-center gap-1'><PiVideoCameraThin /> meet</p>
                <p className='flex items-center gap-1'><RiTimeLine /> 05Pm</p>
              </div>
            </div>
          </div>
          <div className='border-b border-gray-300 mt-5'>
          </div>
        </div>

      </div>





    </>
  )
}

export default Dashboard
