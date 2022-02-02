import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-scroll'
import Aos from 'aos'

import { useEffect } from 'react'
const Navbar = () => {
    useEffect = ()=>{
        Aos.init();
    };
    return (
        <div className=' bg-navblack sm:w-full h-navheight flex flex-row items-center pl-20 pr-20 absolute ' data-aos = "fade-down" >
            <div className='flex flex-row h-full w-full justify-end '>
                     <ul className='flex flex-row w-full'>
                         
                         <div className='w-full text-left h-full  flex flex-row items-center cursor-pointer'>
                             
                             
                             <h1 className='text-white text-2xl animate-pulse font-reem'>
                                Jaloouu
                            </h1>
                            <FontAwesomeIcon icon={faSpinner} className='animate-spin text-white'></FontAwesomeIcon>
                             
                            
                         </div>

                         <div  className='flex flex-row md:space-x-16 justify-center items-center '>
                         
                         <li>
                            <Link to="About" spy={true} smooth={true} offset={-50} duration={500} className = 'cursor-pointer'>
                            <h1 className='text-white text-2xl font-reem bg-inherit transform hover:-translate-y-1 transition duration-150 hover:border-b-8 border-transparent hover:border-white'>
                                 
                                 About
                                
                            </h1> 
                            </Link>
                            
                         </li>
                         <li>
                         <Link to="project" spy={true} smooth={true} offset={-50} duration={500} className = 'cursor-pointer'>
                            <h1 className='text-white text-2xl font-reem bg-inherit transform hover:-translate-y-1 transition duration-150 hover:border-b-8 border-transparent hover:border-white'>

                             Projects
                             
                            </h1>
                            </Link>
                         </li>
                         
                        <li>
                        <Link to="skills" spy={true} smooth={true} offset={-50} duration={500} className = 'cursor-pointer'>
                            <h1 className='text-white text-2xl font-reem bg-inherit transform hover:-translate-y-1 transition duration-150 hover:border-b-8 border-transparent hover:border-white'>
                                
                                
                                Skills
                                
                            </h1>
                        </Link>
                        </li>
                         </div>
                         
                    </ul>
                    
                    
            </div>
        </div>
        
    )
}

export default Navbar
