import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {RiCloseLine, RiHomeLine, RiMenu3Fill} from 'react-icons/ri'
import navLinks from '../assets/data/navLinks'
import logo from '../assets/logo.png';

const Sidebar = () => {
    const [ sideBar, setSideBar ] = useState(false);
    const handleSidebar = () =>{
        setSideBar(!sideBar)
    }
  return (
    <>
    <div className={`fixed lg:static w-[80%] lg:w-full md:w-[40%]  top-0 ${sideBar ? '-left-0' : '-left-full'}  w-full h-full overflow-y-none col-span-1 p-8 bg-white border-r transition-all z-50`}>
        <div className='text-center flex items-center mb-10'>
            <img src={logo} className='w-[50px]' />
            <h1 className='uppercase font-bold tracking-[4px'>Omio Logo</h1>
        </div >
        <nav>
            <ul>
                {
                    navLinks.map((link,index)=>{
                        return<li key={index}>
                        <div>
                            <p className='text-sm text-gray-400 font-semibold mt-4 mb-3'>{link?.category}</p>
                        <Link to={link.path} className='flex items-center gap-3 hover:bg-[#6e62e5] p-2 text-gray-600 hover:text-white text-sm rounded-md transition-colors font-semibold font-custom mb-3'>
                            <p className={link.icon}></p><p>{link.display}</p>
                        </Link>
                        
                        </div>
                    </li>
                    })
                }
                
                
            </ul>
        </nav>
    </div>
  
    <button onClick={handleSidebar} className='block lg:hidden absolute bottom-4 right-4 bg-[#6e62e5] p-2 text-white rounded-full text-xl'>
    {
        sideBar ? <RiCloseLine /> : <RiMenu3Fill /> 
    }
        
    </button>
    </>
  )
}

export default Sidebar
