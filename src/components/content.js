import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'


function Content() {
    return (
        <div className='bg-contentblack w-full min-h-screen  flex flex-row'>
            
            <div className='w-48 min-h-full  flex flex-col justify-center items-center'>
                
            </div>

            <div className='w-full min-h-full bg-contentblack flex flex-col'>

                <div className='w-full min-h-screen  flex flex-col justify-center'>

                    <div className='w-1/2 h-72  flex flex-col ml-2 p-5 justify-between'>
                        <h2 className='text-white font-robot text-2xl'>
                            Hi! I am Achmad Rijalu 
                        </h2>

                        <div className='text-white font-robot text-3xl font-black mt-4'>
                        <h1 className=''>
                            Informatic's Student
                        </h1>
                        <h1>
                            Aiming to be a Fullstack Developer
                        </h1>
                        </div>
                        <div className='flex flex-row mt-5 text-3xl'>
                            
                            <a href='https://www.linkedin.com/in/achmad-rijalu-a-9a105a205/' className='' target="_blank">
                            <FontAwesomeIcon icon={faLinkedin} className='text-white rounded-full cursor-pointer hover:scale-150 transform hover:ease-in-out hover:delay-50 hover:transition-transform transition-transform'></FontAwesomeIcon>
                            </a>
                           
                            
                            <a href='https://www.instagram.com/achjaluwae/' className='' target="_blank">
                            <FontAwesomeIcon icon={faInstagram}  className='text-white rounded-full cursor-pointer hover:scale-150 transform hover:ease-in-out hover:delay-50 hover:transition-transform transition-transform ml-5'></FontAwesomeIcon>
                            </a>
                            <a href='https://github.com/AchmadRijalu' className='' target="_blank">
                            <FontAwesomeIcon icon={faGithub}  className='text-white rounded-full cursor-pointer hover:scale-150 transform hover:ease-in-out hover:delay-50 hover:transition-transform transition-transform ml-5'></FontAwesomeIcon>
                            </a>
                            <a href='https://discordapp.com/users/316909993326542848' className='' target="_blank">
                            <FontAwesomeIcon icon={faDiscord}  className='text-white rounded-full cursor-pointer hover:scale-150 transform hover:ease-in-out hover:delay-50 hover:transition-transform transition-transform ml-5'></FontAwesomeIcon>
                            </a>
                            <a href='https://www.facebook.com/achmad.arianindita/' className='' target="_blank">
                            <FontAwesomeIcon icon={faFacebook}  className='text-white rounded-full cursor-pointer hover:scale-150 transform hover:ease-in-out hover:delay-50 hover:transition-transform transition-transform ml-5'></FontAwesomeIcon> 
                            </a>
                        
                        
                        </div>
                        
                        
                    </div>

                </div>
                <div className='w-full min-h-screen bg-blue-400'>
                    
                    <h1>
                        
                    </h1>
                </div>
            </div>
        </div>
        
    )
}

export default Content
