import React, {useEffect, useState } from "react";
import {Link} from 'react-scroll'

const Side = () => {
    //prototype for active div without link react scroll
    const [color,setColor] = useState({
        activeObject:null,
        objects : [{id:1}, {id:2}, {id:3}, {id:4}]
    });
    
    function toggleActive(index){
        setColor({...color, activeObject:color.objects[index]})
    }
    function toggleActiveStyles(index){
        if(color.objects[index] === color.activeObject){
            return "w-12 h-12 bg-yellow-300 rounded-full shadow-md  shadow-amber-300 drop-shadow-2xl  cursor-pointer";
        }
        else{
            return "w-12 h-12 bg-white rounded-full mt-10 cursor-pointer";
            
        }
    }

    const [color1, setColor1] = useState(true);
    const [color2, setColor2] = useState(false);
    const [color3, setColor3] = useState(false);
    const [color4, setColor4] = useState(false);
    const ToggleClass = () => {

       
        if(color1 === true){
            
            setColor2(color2);
            setColor3(color3);
            setColor4(color4);
        }
        if(color1 === false){
            if(color3 === true){
                setColor1(!color1);
                setColor3(!color3);
                
            }
            if(color2 === true){
                setColor1(!color1);
                setColor2(!color);
            }
            if(color4 === true){
                setColor1(!color1);
                setColor4(!color4);
            }
            setColor1(!color1);
            
        }
        
    }
    const ToggleClass2 = () => {
        if(color2 === false){
            if(color3 === true){
                setColor2(!color2);
                setColor3(!color3);
            }
            if(color4 === true){
                setColor2(!color2);
                setColor4(!color4);
            }
            if(color1 === true){
                setColor1(!color1);
                setColor2(!color2);
            }
           
        }
        if(color2 === true){
            setColor2(color2);
            
        }
    }
    const ToggleClass3 = () => {
        if(color3 === false){
            if(color1 === true){
                setColor1(!color1);
                setColor3(!color3);
            }
            
            if(color2 ===true){
                setColor2(!color2);
                setColor3(!color3);
            }
            if(color4 === true){
                setColor3(!color3);
                setColor4(!color4);
            }

            
            
        }
        if(color3 === true){
            setColor2(color2);
            setColor1(color1);
        }
    }
    const ToggleClass4 = () => {
        if(color4 === false){
            
            
            if(color2 ===true){
                setColor2(!color2);
                setColor4(!color4);
            }
            if(color1 ===true){
                setColor1(!color1);
                setColor4(!color4);
            }
            if(color3 ===true){
                setColor3(!color3);
                setColor4(!color4);
            }
        }
        if(color4 === true){
            setColor2(color2);
            setColor1(color1);
        }
    }
        
        
    
    
    return(
        <div className='w-44 min-h-full md:bg-transparent  flex flex-col justify-center items-center absolute sm:fixed transform md:translate-x-0 delay-150 -translate-x-full ease-in-out duration-150'>
        {/* {color.objects.map((elements, index) =>( */}
            
            <div className='w-full  flex flex-col justify-center items-center p-4 border-r-4'>
                <Link to="Home" spy={true} smooth={true} offset={-50} duration={500}>
                <div className= {color1 ? " w-12 h-12 bg-yellow-300 rounded-full shadow-md animate-bounce  shadow-amber-300 drop-shadow-2xl  cursor-pointer": "w-12 h-12 bg-white rounded-full mt-10 cursor-pointer"} onClick={()=> ToggleClass()}>

                </div>
                </Link>
               
                <Link to="About" spy={true} smooth={true} offset={-50} duration={500}>
                <div className={color2 ? " w-12 h-12 bg-yellow-300 mt-9 rounded-full shadow-md animate-bounce  shadow-amber-300 drop-shadow-2xl  cursor-pointer": "w-12 h-12 bg-white rounded-full mt-10 cursor-pointer"}onClick={()=> ToggleClass2()}>

                </div>
                </Link>
                
                <Link to="project" spy={true} smooth={true} offset={-50} duration={500}>
                <div className={color3 ? " w-12 h-12 bg-yellow-300 mt-9 rounded-full shadow-md animate-bounce  shadow-amber-300 drop-shadow-2xl  cursor-pointer": "w-12 h-12 bg-white rounded-full mt-10 cursor-pointer"}onClick={()=> ToggleClass3()}>

                </div>
                </Link>
                
                <Link to="skills" spy={true} smooth={true} offset={-50} duration={500}>
                <div className={color4 ? " w-12 h-12 bg-yellow-300 mt-9 rounded-full shadow-md animate-bounce  shadow-amber-300 drop-shadow-2xl  cursor-pointer": "w-12 h-12 bg-white rounded-full mt-10 cursor-pointer"}onClick={()=> ToggleClass4()}>

                </div>
                </Link>
                
            </div>
                
            
        {/* ) )} */}
           </div> 
    )
}
{/* <div className={toggleActiveStyles(index)} key={index} onClick={()=>toggleActive(index)}>

</div> */}
export default Side


