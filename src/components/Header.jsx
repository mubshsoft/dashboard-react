import React from 'react'
import { RiArrowDownSLine, RiCheckboxBlankCircleFill, RiNotification2Line, RiSearchLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { Dropdown, message, Space } from 'antd';
const onClick = ({ key }) => {
  message.info(`Click on item ${key}`);
};

const items = [
    {
      label: 'Profile',
      key: '1',
    },
    {
      label: 'My Account',
      key: '2',
    },
    {
      label: 'Change Password',
      key: '3',
    },
  ];

 
const Header = () => {
    
  return (
    <header className='flex flex-col md:flex-row gap-4 items-center justify-between p-4 w-full'>
        <div className='flex items-center gap-4'>
        <img src="https://demos.creative-tim.com/notus-js/assets/img/team-1-800x800.jpg" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow" />
        <div className='flex flex-col text-xs font-custom'>
        <h1 className='font-custom  font-semibold text-xs sm:text-xl md:text-xl lg:text-2xl xl:text-3xl'>Good Evening Team!</h1>
        <p>Have an in-depth look at all the  matrics withing your dashboard </p> 
        </div>
        </div>
        <form className='w-full md:w-[40%] lg:w-[20%] order-1 md:order-none'>
            <div className='relative'>
                <RiSearchLine className='absolute right-25 ml-2 top-3' />
                <input type='text' className='bg-gray-100 py-2 pl-8 outline-none rounded-md w-full' />
            </div>
        </form>
        {/* Notifications */}
        <nav className='w-full md:w-[30%] flex justify-center md:justify-end'>
            <ul className='flex items-center gap-4 '>
                <li>
                    <Link to='/' className='relative'>
                        <RiNotification2Line className='text-xl'  />
                        <RiCheckboxBlankCircleFill className='absolute -right-1 -top-1 text-xs text-red-500' />
                    </Link>
                </li>
                <Dropdown
                menu={{
                items,
                onClick,
                }}
            >
                <li className='shadow-md px-4 py-1 rounded-full'>
                
                    <Link to='/' className='flex items-center gap-1' onClick={(e) => e.preventDefault()}>
                    <Space>
                       <img  src='https://www.pngkey.com/png/full/72-729716_user-avatar-png-graphic-free-download-icon.png' className='w-[20px]' /> Jhontosan 
                       <RiArrowDownSLine />
                       </Space>
                    </Link>
                    
                </li>
                </Dropdown>
            </ul>
        </nav>
    </header>
  )
}

export default Header
