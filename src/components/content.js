
import React, { useState } from 'react'
import {Link} from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import {faEquals} from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faMars } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faCity } from '@fortawesome/free-solid-svg-icons'
import {Animated} from 'react-animated-css'
import Aos from 'aos'
import { faJava } from '@fortawesome/free-brands-svg-icons'
import { faPhp } from '@fortawesome/free-brands-svg-icons'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons'
import Carousel from 'react-elastic-carousel'
import { faLaravel } from '@fortawesome/free-brands-svg-icons'
import { faJs } from '@fortawesome/free-brands-svg-icons'
import { faAndroid } from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faUnity } from '@fortawesome/free-brands-svg-icons'
import { useEffect } from 'react'
function Content(props) {

    useEffect = ()=>{
        Aos.init();
    };
    const [show,setShow] = useState(true)

    const Card = ({number}) => <div className='w-full h-max bg-white rounded-2xl p-1' data-aos="fade-right" > 
    
    <div className='W-full h-max p-3 font-reem text-2xl '>
                                 <h1>
                                 Semester 1
                                 </h1>
                                 
                            </div>
                            <div className='w-max h-max p-1 px-3  flex flex-col justify-between space-y-5 border-b-2'>
                                <div>
                                <h1 className='font-bold font-robot text-3xl'>
                                Slash the Math!
                                </h1>
                                <h2 className='text-sm font-semibold text-slate-500 font-robot'>
                                    Algorithm and Programming
                                </h2>
                                </div>
                                <div className='flex flex-row items-center font-reem text-sm space-x-2 '>
                                    <FontAwesomeIcon icon={faUsers} className='text-slate-600'>

                                    </FontAwesomeIcon>
                                    <h1>
                                        Mahadi Rafi W
                                    </h1>
                                </div>
                                
                                
                            </div>
                            <div className='w-max h-max  p-2 px-4 flex flex-row items-center text-2xl' >
                                    <FontAwesomeIcon icon={faJava}></FontAwesomeIcon>
                                </div>
                            <div>

                            </div>
    
    {number}</div>

    const breakpoint = [{
        width: 500, itemsToShow : 3, itemsToScroll : 3
    }]
    
    
    return (
        
        <div className='bg-contentblack w-full min-h-screen  flex flex-row'>
            
            <div className='w-48 min-h-full  flex flex-col justify-center items-center'>
                
            </div>

            <div className='w-full min-h-full bg-contentblack flex flex-col' id='Home' >

                <div className='w-full min-h-screen  flex flex-col justify-center'>


                <div className='w-1/2 h-64  flex flex-col ml-2 p-5 justify-between' data-aos="fade-up">
                <Animated animationIn="bounceInLeft" animationOut="fadeOutLeftBig" animationInDuration={1000} animationOutDuration={1000} isVisible={true} >
                        <h2 className='text-white font-robot text-2xl' >
                            Hi! I am Achmad Rijalu 
                        </h2>

                        <div className='text-white font-robot text-3xl font-black mt-4'>
                        <h1 className=''>
                            Informatics Student
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
                            <FontAwesomeIcon icon={faInstagram}  className='text-white rounded-full cursor-pointer hover:scale-150 transform hover:ease-in-out hover:delay-50 hover:transition-transform transition-transform ml-6'></FontAwesomeIcon>
                            </a>
                            <a href='https://github.com/AchmadRijalu' className='' target="_blank">
                            <FontAwesomeIcon icon={faGithub}  className='text-white rounded-full cursor-pointer hover:scale-150 transform hover:ease-in-out hover:delay-50 hover:transition-transform transition-transform ml-6'></FontAwesomeIcon>
                            </a>
                            <a href='https://discordapp.com/users/316909993326542848' className='' target="_blank">
                            <FontAwesomeIcon icon={faDiscord}  className='text-white rounded-full cursor-pointer hover:scale-150 transform hover:ease-in-out hover:delay-50 hover:transition-transform transition-transform ml-6'></FontAwesomeIcon>
                            </a>
                            <a href='https://www.facebook.com/achmad.arianindita/' className='' target="_blank">
                            <FontAwesomeIcon icon={faFacebook}  className='text-white rounded-full cursor-pointer hover:scale-150 transform hover:ease-in-out hover:delay-50 hover:transition-transform transition-transform ml-6'></FontAwesomeIcon> 
                            </a>
                        
                        
                        </div>
                        </Animated>
                    </div>
                </div>
                <div className='w-full min-h-screen bg-contentblack flex flex-col ' id='About'>
                    
                    <div className='w-full h-24  flex flex-col justify-center p-6'>
                        <h1 className='text-white text-4xl font-robot font-bold'>
                            About
                        </h1>
                    </div>
                    <div className='w-full h-3/4 flex flex-col bg-contentblack p-6 '>
                             <div className='mt-3'>
                             <p className='text-white text-xl font-robot font-medium'>
                             Hi, my name is Achmad Rijalu A. I am an Informatics student at Ciputra 
                            University and currently on 4th of bachelor's degree in computer science.
                            </p>
                             </div>
                            
                            <div className='mt-5'>
                            <p className='text-white text-xl font-robot font-medium '>
                            I have big interest in Web Development, Mobile , Artificial Intelligence 
                            and, Digital Marketing.  
                            </p>
                            </div>
                            <div className='mt-5'>
                            <p className='text-white text-xl font-robot font-medium'>
                            In the future, i will deploy all of my projects and documentation of the 
                            programming languages that used on it into this website. 
                            </p>
                            </div>

                            <div className='w-full h-full  flex flex-row mt-6  space-x-10 ' >
                            {/* <div className='w-1/4 h-full  flex flex-col justify-center items-center'>
                            <div onClick={()=> setShow(!show)} className='flex flex-row text-3xl cursor-pointer'>
                                <FontAwesomeIcon icon={faEquals} className='text-white transform delay-75'></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faChevronRight} className='text-white'></FontAwesomeIcon>
                                </div>
                            </div> */}
                            <div className='w-max h-full  flex flex-row bg-contentblack p-1 rounded-lg bg-opacity-20 shadow-sm drop-shadow-lg bg-clip-padding border-r-1 shadow-slate-50 ' >

                            <Animated animationIn="slideInLeft" animationOut="slideOutRight" animationInDuration={1000} animationOutDuration={1000} show={true}>
                            {
                                show?<div className=' h-full  flex flex-row p-3 ' >
                                
                                    
                                    <img src='/images/profpic2.jpg' className='w-80 h-full hover:animate-pulse transition-opacity hover:delay-150 delay-100 rounded-lg' data-aos = "fade-up"></img>
                                    
                                    <div className=' h-full  flex flex-col justify-center p-2 opacity-80' data-aos = "fade-up">
                                    
                                        <div className='w-full flex flex-row text-white p-2 items-center font-reem'>
                                        <FontAwesomeIcon icon={faUser} className=''>

                                        </FontAwesomeIcon>
                                        <p className='ml-2'>
                                            : Achmad Rijalu Arianindita
                                        </p>
                                        </div>

                                        <div className='w-full flex flex-row text-white p-2 items-center font-reem'>
                                            <FontAwesomeIcon icon={faMars}>

                                            </FontAwesomeIcon>
                                            <p className='ml-2'>
                                                : Male
                                            </p>
                                        </div>
                                        <div className='w-full flex flex-row text-white p-2 items-center font-reem'>
                                            <FontAwesomeIcon icon={faCalendar}>

                                            </FontAwesomeIcon>
                                            <p className='ml-2'>
                                                : 20 Years Old
                                            </p>
                                        </div>
                                        <div className='w-full flex flex-row text-white p-2 items-center font-reem'>
                                            <FontAwesomeIcon icon={faCity}>

                                            </FontAwesomeIcon>
                                            <p className='ml-2'>
                                                : Surabaya
                                            </p>
                                        </div>
                                    
                                    </div>
                                </div>:null
                                    }
                            </Animated>
                            </div>
                            <div className='w-2/5 h-full flex flex-col bg-contentblack p-1 rounded-lg bg-opacity-20 shadow-sm drop-shadow-lg bg-clip-padding border-r-1 shadow-slate-50 ' >
                                <div className='w-full h-max  text-white font-robot flex justify-center p-2 text-2xl font-semibold  flex-row ' data-aos = "fade-up">
                                    <h1>
                                        Experience
                                    </h1>
                                </div>
                                <div className='w-full h-full   p-5 font-robot font-medium ' data-aos = "fade-up">
                                    <ul className='text-white space-y-4'>
                                        <li>
                                            - 1st Place Cak Cilik Surabaya 2013
                                        </li>
                                        <li>
                                            - Security Division Libels Cup 2019
                                        </li>
                                        <li>
                                           - External Member of IMT Student Union UC 2021-2022
                                        </li>
                                        <li>
                                            - Inventory member of 8th NPLC 2021 IMT's Annual Event 
                                        </li>
                                        <li>
                                            - Head of marketing of 9th NPLC 2022 IMT's Annual Event
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            </div>
                                
      
                    </div>
                </div>
                <div className='w-full min-h-screen flex flex-col 'id="project">                  
                    <div className='w-full h-24   flex flex-col justify-center p-7'>
                        <h1 className='text-white text-4xl font-robot font-bold'>
                            Projects
                        </h1>
                    </div>
                    <div className='w-full h-full bg-contentblack p-7 '>

                    <div className='min-w-full h-max flex flex-row space-x-4'>

                        <Carousel breakPoints={breakpoint} className="gap-x-4" indicators={false} infiniteLoop={true}>


                        <div className='w-full h-max bg-white rounded-2xl p-1 mr-5' data-aos="fade-right" number="1">
                            
                            <div className='W-full h-max p-3 font-reem text-2xl '>
                                 <h1>
                                 Semester 1
                                 </h1>
                                 
                            </div>
                            <div className='w-max h-max p-1 px-3  flex flex-col justify-between space-y-5 border-b-2'>
                                <div>
                                <h1 className='font-bold font-robot text-3xl'>
                                Slash the Math!
                                </h1>
                                <h2 className='text-sm font-semibold text-slate-500 font-robot'>
                                    Algorithm and Programming
                                </h2>
                                </div>
                                <div className='flex flex-row items-center font-reem text-sm space-x-2 '>
                                    <FontAwesomeIcon icon={faUsers} className='text-slate-600'>

                                    </FontAwesomeIcon>
                                    <h1>
                                        Mahadi Rafi W
                                    </h1>
                                </div>
                                
                                
                            </div>
                            <div className='w-max h-max  p-2 px-4 flex flex-row items-center text-2xl' >
                                    <FontAwesomeIcon icon={faJava}></FontAwesomeIcon>
                                </div>
                            <div>

                            </div>
                        
                        </div> 

                        <div className='w-full h-max bg-white rounded-2xl p-1 mr-5' data-aos="fade-right" number="2">
                            <div className='W-full h-max p-3 font-reem text-2xl '>
                                 <h1>
                                 Semester 2
                                 </h1>
                                 
                            </div>
                            <div className='w-max h-max p-1 px-3  flex flex-col justify-between space-y-5 border-b-2 '>
                                <div>
                                <h1 className='font-bold font-robot text-3xl'>
                                GaSe Game Seller
                                </h1>
                                <h2 className='text-sm font-semibold text-slate-500 font-robot'>
                                    Web Programming
                                </h2>
                                </div>
                                <div className='flex flex-row items-center font-reem text-sm space-x-2 w-full'>
                                    <FontAwesomeIcon icon={faUsers} className='text-slate-600'>

                                    </FontAwesomeIcon>
                                    <h1>
                                        Timothy ,
                                    </h1>
                                    <h1>
                                        Oey Darryl
                                    </h1>
                                </div>
                                
                                
                            </div>
                            <div className='w-max h-max  p-2 px-4 flex flex-row items-center text-2xl space-x-3'>
                                    <FontAwesomeIcon icon={faHtml5}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faCss3Alt}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faPhp}></FontAwesomeIcon>
                            </div>
                            <div>

                            </div>
                        
                        </div> 

                        <div className='w-full h-max bg-white rounded-2xl p-1 mr-5' data-aos="fade-right" number="3">
                            <div className='W-full h-max p-3 font-reem text-2xl '>
                                 <h1>
                                 Semester 2
                                 </h1>
                                 
                            </div>
                            <div className='w-full h-max p-1 px-3  flex flex-col justify-between space-y-5 border-b-2'>
                                <div>
                                <h1 className='font-bold font-robot text-3xl'>
                                SHU Kita Semua
                                </h1>
                                <h2 className='text-sm font-semibold text-slate-500 font-robot'>
                                    Programming Technique
                                </h2>
                                </div>
                                <div className='flex flex-row items-center font-reem text-sm space-x-2 '>
                                    <FontAwesomeIcon icon={faUsers} className='text-slate-600'>

                                    </FontAwesomeIcon>
                                    <h1>
                                        Mahadi Rafi W
                                    </h1>
                                </div>
                                
                                
                            </div>
                            <div className='w-full h-max  p-2 px-4 flex flex-row items-center text-2xl space-x-3'>
                                    <FontAwesomeIcon icon={faJava}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faAndroid}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faPhp}></FontAwesomeIcon>
                            </div>
                            <div>

                            </div>
                        
                        </div>
                        <div className='w-full  bg-white rounded-2xl p-1 mr-5' data-aos="fade-right" number="4">
                            <div className='W-full h-max p-3 font-reem text-2xl '>
                                 <h1>
                                 Semester 3
                                 </h1>
                                 
                            </div>
                            <div className='w-full h-max p-1 px-3  flex flex-col justify-between space-y-5 border-b-2 '>
                                <div>
                                <h1 className='font-bold font-robot text-3xl'>
                                Bio Up!(Web Version)
                                </h1>
                                <h2 className='text-sm font-semibold text-slate-500 font-robot'>
                                    Web Development
                                </h2>
                                </div>
                                <div className='flex flex-row items-center font-reem text-sm space-x-1 '>
                                    <FontAwesomeIcon icon={faUsers} className='text-slate-600'>

                                    </FontAwesomeIcon>
                                    <h1>
                                        Mahadi Rafi W, 
                                    </h1>
                                    <h1>
                                        Alvin Gary,
                                    </h1>
                                    <h1>
                                        Syamsuddin Putra R
                                    </h1>
                                </div>
                                
                                
                            </div>
                            <div className='w-full h-max  p-2 px-4 flex flex-row items-center text-2xl space-x-3'>
                                    <FontAwesomeIcon icon={faLaravel}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faJs}></FontAwesomeIcon>
                                    <img src="/images/tailwind.png" className='w-6 h-6'></img>
                                    <FontAwesomeIcon icon={faDatabase}></FontAwesomeIcon>
                            </div>
                            <div>

                            </div>
                        
                        </div>
                        <div className='w-full h-max bg-white rounded-2xl p-1 mr-5' data-aos="fade-right" number="5">
                            <div className='W-full h-max p-3 font-reem text-2xl '>
                                 <h1>
                                 Semester 3
                                 </h1>
                                 
                            </div>
                            <div className='w-full h-max p-1 px-3  flex flex-col justify-between space-y-5 border-b-2 '>
                                <div>
                                <h1 className='font-bold font-robot text-3xl'>
                                Bio Up!(Mobile Version)
                                </h1>
                                <h2 className='text-sm font-semibold text-slate-500 font-robot'>
                                    Mobile Application Development
                                </h2>
                                </div>
                                <div className='flex flex-row items-center font-reem text-sm space-x-1 '>
                                    <FontAwesomeIcon icon={faUsers} className='text-slate-600'>

                                    </FontAwesomeIcon>
                                    <h1>
                                        Mahadi Rafi W, 
                                    </h1>
                                    <h1>
                                        Alvin Gary,
                                    </h1>
                                    <h1>
                                        Syamsuddin Putra R
                                    </h1>
                                </div>
                                
                                
                            </div>
                            <div className='w-full h-max  p-2 px-4 flex flex-row items-center text-2xl space-x-3'>
                                    <FontAwesomeIcon icon={faLaravel}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faJava}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faAndroid}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faDatabase}></FontAwesomeIcon>
                            </div>
                            <div>

                            </div>
                        
                        </div>
                        <div className='w-full h-max bg-white rounded-2xl p-1 mr-5' data-aos="fade-right" number="6">
                            <div className='W-full h-max p-3 font-reem text-2xl '>
                                 <h1>
                                 Semester 3
                                 </h1>
                                 
                            </div>
                            <div className='w-full h-max p-1 px-3  flex flex-col justify-between space-y-5 border-b-2 '>
                                <div>
                                <h1 className='font-bold font-robot text-3xl'>
                                TampolSquito
                                </h1>
                                <h2 className='text-sm font-semibold text-slate-500 font-robot'>
                                    Game Design
                                </h2>
                                </div>
                                <div className='flex flex-row items-center font-reem text-sm space-x-1 '>
                                    <FontAwesomeIcon icon={faUsers} className='text-slate-600'>

                                    </FontAwesomeIcon>
                                    <h1>
                                        Mahadi Rafi W, 
                                    </h1>
                                    
                                    <h1>
                                        Syamsuddin Putra R
                                    </h1>
                                </div>
                                
                                
                            </div>
                            <div className='w-full h-max  p-2 px-4 flex flex-row items-center text-2xl space-x-3'>
                                    <FontAwesomeIcon icon={faUnity}></FontAwesomeIcon>
                            </div>
                            <div>

                            </div>
                        
                        </div>

                        </Carousel>
                    </div>
                        
                </div>   
                
                
            </div>
            <div className='w-full min-h-screen  flex flex-col' id='skills'>                  
                <div className='w-full h-24   flex flex-col justify-center p-7 '>
                    <h1 className='text-white text-4xl font-robot font-bold'>
                            Skills
                    </h1>
                </div>
                <div className='w-full h-full flex flex-col'>
                        <div className='w-full h-16  flex flex-col justify-center items-center'>
                            <h1 className='text-white font-reem font-semibold tracking-wide text-lg'>
                               I have an experience in develop some applications with programming languages, Markup, StyleSheets, and Frameworks.
                            </h1>
                        </div>
                        <div className='w-full h-full bg-yellow-200 grid-cols-4'>
                            <div className='w-96 h-44 bg-white'>

                            </div>
                        </div>
                        
                </div>
            </div>
        </div>
            
            
     </div>
        
    );
}

export default Content