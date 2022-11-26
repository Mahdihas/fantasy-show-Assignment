import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaCentos } from "react-icons/fa";
import { FaPhoneVolume ,FaTv} from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";






const Header = () => {

  


  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  
  const menu = <React.Fragment>
    <>
  <li>
              <NavLink
                to='/home'
                aria-label='Home'
                title='Home'
                className={({ isActive }) =>
                  isActive
                    ? 'font-bold tracking-wide uppercase text-[#ff5761]  transition-colors duration-200 hover:text-deep-purple-accent-400'
                    : 'font-medium tracking-wide uppercase text-[#e6e7e7] transition-colors duration-200 hover:text-deep-purple-accent-400'
                }
              >
                Home
              </NavLink>
      </li>

      <li>
              <NavLink
                to='/allshow'
                aria-label='Shows'
                title='Home'
                className={({ isActive }) =>
                  isActive
                    ? 'font-bold tracking-wide text-[#ff5761] uppercase transition-colors duration-200 hover:text-deep-purple-accent-400'
                    : 'font-medium tracking-wide text-[#e6e7e7] uppercase transition-colors duration-200 hover:text-deep-purple-accent-400'
                }
              >
                All Shows
              </NavLink>
      </li>

      <li>
              <NavLink
                to='/blog'
                aria-label='blog'
                title='Home'
                className={({ isActive }) =>
                  isActive
                    ? 'font-bold tracking-wide uppercase text-[#ff5761]  transition-colors duration-200 hover:text-deep-purple-accent-400'
                    : 'font-medium tracking-wide uppercase text-[#e6e7e7] transition-colors duration-200 hover:text-deep-purple-accent-400'
                }
              >
                Blog
              </NavLink>
      </li>
      </>
           </React.Fragment>











   







  return (
    <>
      

    <div className='nav bg-[#2b2b31] shadow-lg'>
      <div className='px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
        <div className='relative flex items-center justify-between px-8'>
        <Link
            to='/'
            aria-label='proReader'
            title='proReader'
            className='inline-flex items-center'
          >
            <FaTv className='font-bold text-[#ff5761] text-2xl'></FaTv>
           

            <span className='ml-2 text-xl text-white uppercase font-bold tracking-wide #302e2c text-shadow-lg'>
            Fantasy <span className='text-[#ff5761] uppercase'>Show </span>

            </span>
          </Link>
       
            <ul className=' items-center hidden space-x-8 lg:flex '>
              
           
            
            {menu}
            </ul>
            <div className="">
           
            </div>
            <div className='bg-[#2b2b31] lg:hidden'>
            <button
              aria-label='Open Menu'
              title='Open Menu'
              className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className='w-5 text-[gray]' viewBox='0 0 24 24'>
                <path
                  fill='currentColor'
                  d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
                />
                <path
                  fill='currentColor'
                  d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
                />
                <path
                  fill='currentColor'
                  d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className='absolute  top-0 left-0 w-full z-40'>
                <div className='p-5 bg-[#202428] border rounded shadow-sm'>
                  <div className='flex items-center justify-between mb-4'>
                    <div>
                    <Link
            to='/'
            aria-label='proReader'
            title='proReader'
            className='inline-flex items-center'
          >
            <FaTv className='font-bold text-[#ff5761] text-2xl'></FaTv>
           

            <span className='ml-2 text-xl text-white uppercase font-bold tracking-wide #302e2c text-shadow-lg'>
            Fantasy <span className='text-[#ff5761] uppercase'>Show </span>

            </span>
          </Link>
                      
            
      
                    </div>
                    <div>
                      <button
                        aria-label='Close Menu'
                        title='Close Menu'
                        className='p-2 -mb-[-100px] -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className='w-5 text-[gray]' viewBox='0 0 24 24'>
                          <path
                            fill='currentColor'
                            d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                  <ul className='spacey-4'>
           
                      

                      
        {menu}

       
            
          
          </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
           
           
   
         
        </div>
      </div>
      </div>
      </>
  )
}

export default Header