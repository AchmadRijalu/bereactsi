import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import Navbar from './components/Navbar';
import Content from './components/content';
import Side from './components/Side';
import HamburgerMenu from './components/HamburgerMenu';
import Aos from 'aos'
import "aos/dist/aos.css"
import { render } from '@testing-library/react';
import {Link} from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner} from '@fortawesome/free-solid-svg-icons'
class Header extends React.Component{
  render(){
    return <div>
      <h2>
        This is Component
      </h2>
    </div>
  }
}

// class App extends React.Component{
//   render(){
//     return(
//       <div>
//         <h1>Ini adalah mencoba react</h1>
//         <Navbar></Navbar>
//       <Header></Header>
//       </div>
//     );
//   }
// }

function App() {

  
  render();{
  Aos.init();
  const [show,setShow] = useState(true)
  const [toggle, setToggle] = useState(false)
  return (
    <div className="bg-contentblack">
      
      <div className=' bg-navblack mini:w-full h-navheight flex flex-row items-center md:pl-20 mini:pr-11 md:pr-20 md:absolute mini:fixed ' data-aos = "fade-down" >
            <div className='flex flex-row h-full w-full justify-end '>
                     <ul className='flex flex-row w-full'>
                         
                         <div className='w-full text-left h-full  flex flex-row items-center justify-start  cursor-pointer'>
                             
                             <h1 className='text-white text-2xl animate-pulse font-reem md:ml-0 mini:ml-7'>
                                Jaloouu
                            </h1>
                             
                            <FontAwesomeIcon icon={faSpinner} className='animate-spin text-white'></FontAwesomeIcon>
                             
                            
                         </div>
                            <div className='mini:flex flex-col justify-center items-center md:hidden '>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={()=> setShow(!show)}>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        
                            </div>
                            
                         
                         
                         <div  className=' flex-row md:space-x-16 justify-center items-center  sm:hidden md:flex lg:flex  mini:hidden'>
                         
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

        {!show && (<div className="w-40 h-fit bg-navblack  mini:fixed md:hidden top-16 mt-2 right-0 ml-2 rounded-b-xl" data-aos="fade-down">
                <Link to="Home" spy={true} smooth={true} offset={-50} duration={500} onClick={()=> setShow(!show)}>
                <div className="w-full h-fit border-b-4 p-4">
                    <h1 className="text-white font-robot text-center">
                        Home
                    </h1>
                </div>
                </Link>
                <Link to="About" spy={true} smooth={true} offset={-50} duration={500} onClick={()=> setShow(!show)}>
                <div className="w-full h-fit border-b-4 p-4"> 
                    <h1 className="text-white font-robot text-center">
                        About
                    </h1>
                </div>
                </Link>
                <Link to="project" spy={true} smooth={true} offset={-50} duration={500} onClick={()=> setShow(!show)}>
                <div className="w-full h-fit border-b-4 p-4">
                    <h1 className="text-white font-robot text-center">
                        Projects
                    </h1>
                </div>
                </Link>
                <Link to="skills" spy={true} smooth={true} offset={-50} duration={500} onClick={()=> setShow(!show)}>
                <div className="w-full h-fit border-b-4 p-4">
                    <h1 className="text-white font-robot text-center">
                        Skills
                    </h1>
                </div>
                </Link>
                
            </div>)}
      
      <Side>
        
      </Side>
      <Content>

      </Content>
      
    </div>

   
  );
  // return React.createElement('h1', {class:'header'},'hello world');
  }

}

export default App;
