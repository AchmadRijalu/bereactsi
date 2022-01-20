import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner} from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
    return (
        <div className=' bg-navblack sm:w-full h-navheight flex flex-row items-center pl-20 pr-20 absolute '>
            <div className='flex flex-row h-full w-full justify-end items-center'>
                     <ul className='flex flex-row w-full'>
                         
                         <div className='w-full text-left p-6 flex flex-row items-center '>
                             
                            <h1 className='text-white text-3xl shadow-gray-50 animate-pulse font-reem bg-inherit drop-shadow-md'>
                                Jaloouu
                            </h1>
                            <FontAwesomeIcon icon={faSpinner} className='animate-spin text-white'></FontAwesomeIcon>
                         </div>

                         <div  className='flex flex-row md:space-x-16 justify-center items-center '>
                         
                         <li>
                            <h1 className='text-white text-2xl font-reem bg-inherit transform hover:-translate-y-1 transition duration-150 hover:border-b-8 border-transparent hover:border-white'>
                                 <a href=''>
                                 About
                                </a>
                            </h1> 
                         </li>
                         <li>
                            <h1 className='text-white text-2xl font-reem bg-inherit transform hover:-translate-y-1 transition duration-150 hover:border-b-8 border-transparent hover:border-white'>
                             
                             <a href=''>
                             Projects
                             </a>
                            </h1>
                         </li>
                        <li>
                            <h1 className='text-white text-2xl font-reem bg-inherit transform hover:-translate-y-1 transition duration-150 hover:border-b-8 border-transparent hover:border-white'>
                                
                                <a href=''>
                                Contacts
                                </a>
                            </h1>
                        </li>
                         </div>
                         
                    </ul>
                    
                    
            </div>
        </div>
        
    )
}

export default Navbar
