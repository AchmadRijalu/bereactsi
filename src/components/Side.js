import React, {useEffect, useState } from "react";
import {Link} from 'react-scroll'

const Side = () => {
    const [color,setColor] = useState(false);
    

    return(
        
            <div className='w-44 min-h-full md:bg-transparent  flex flex-col justify-center items-center absolute sm:fixed transform sm:translate-x-0 -translate-x-full ease-in-out duration-150'>
                <div className='w-full  flex flex-col justify-center items-center p-4 border-r-4'>
                <Link to="Home" spy={true} smooth={true} offset={-50} duration={500}>
                <div className='w-12 h-12 bg-yellow-300 rounded-full shadow-md  shadow-amber-300 drop-shadow-2xl animate-bounce cursor-pointer'>

                </div>
                </Link>
               
                <Link to="About" spy={true} smooth={true} offset={-50} duration={500}>
                <div className='w-12 h-12 bg-white rounded-full mt-10 cursor-pointer'>

                </div>
                </Link>
                
                <Link to="project" spy={true} smooth={true} offset={-50} duration={500}>
                <div className='w-12 h-12 bg-white rounded-full mt-10 cursor-pointer'>

                </div>
                </Link>
                
                <Link to="skills" spy={true} smooth={true} offset={-50} duration={500}>
                <div className='w-12 h-12 bg-white rounded-full mt-10 cursor-pointer'>

                </div>
                </Link>
                
                </div>
                
            </div>
    )
}

export default Side


