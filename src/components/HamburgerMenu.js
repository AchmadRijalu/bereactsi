
import React ,{useEffect,useState}  from "react";
import {Link} from "react-scroll"
import Aos  from "aos";
const HamburgerMenu = () => {

    useEffect = ()=>{
        Aos.init();
    };
    const [show, setShow] = useState(true)
    return(
        <div>
            {show && (
                <div className="w-40 h-fit bg-navblack  mini:fixed md:hidden top-16 mt-2 right-0 ml-2 rounded-b-xl" data-aos="fade-down">
                <Link to="Home" spy={true} smooth={true} offset={-50} duration={500}>
                <div className="w-full h-fit border-b-4 p-4">
                    <h1 className="text-white font-robot text-center">
                        Home
                    </h1>
                </div>
                </Link>
                <Link to="About" spy={true} smooth={true} offset={-50} duration={500}>
                <div className="w-full h-fit border-b-4 p-4">
                    <h1 className="text-white font-robot text-center">
                        About
                    </h1>
                </div>
                </Link>
                <Link to="project" spy={true} smooth={true} offset={-50} duration={500}>
                <div className="w-full h-fit border-b-4 p-4">
                    <h1 className="text-white font-robot text-center">
                        Projects
                    </h1>
                </div>
                </Link>
                <Link to="skills" spy={true} smooth={true} offset={-50} duration={500}>
                <div className="w-full h-fit border-b-4 p-4">
                    <h1 className="text-white font-robot text-center">
                        Skills
                    </h1>
                </div>
                </Link>
                
            </div>
            )}
            
        </div>
        
    );
}
export default HamburgerMenu
