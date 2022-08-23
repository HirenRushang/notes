import React, { useState } from 'react'
import "./Button.css"
import {BsFillPlusCircleFill} from "react-icons/bs"
import { motion} from 'framer-motion'


const ulvarients = {
    hidden:{
      y: "-100vw"
    },
    visible:{
      y: 0,
      transition:{type:"spring", stiffness:120}
     
    },
 
}

const Button = ({abc}) => {

    const colors = ["#fe9b72", "#fec971", " #00d4fe", "#b693fd", "#e4ee91"];

    const[ShowColorOption, setShowColorOption] = useState(false)

  return (
    <div className='btn_wrapper'>
        <div className='btn'>
        {/* <button   className='nte_cret_btn'>+</button> */}
        <BsFillPlusCircleFill fontSize={"50px"} onClick={()=> setShowColorOption(!ShowColorOption)}/>
        </div>

      
        {ShowColorOption && <div className='select_color'>
         
          <motion.ul   variants={ulvarients} initial="hidden" animate="visible">
            {colors.map((c,index)=>{return(
               
                 <li  key={index} className='color' style={{backgroundColor:c}} onClick={()=>abc(c)}></li>
            )})

            }
          </motion.ul>
        
         
        </div>}

       
        
    </div>
  )
}

export default Button