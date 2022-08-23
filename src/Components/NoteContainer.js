import React from 'react'
import "./Note.css"
import {MdDeleteOutline} from "react-icons/md"

import { motion} from 'framer-motion'



const notevarients = {
   hidden:{
      x:"100vw"
   },
   visible:{
      x:0,
      transition:{type:"spring", stiffness:120}
      
   }
}





const NoteContainer = ({note, qwer, textget}) => {

  
 

  return (
    <div className='note_wrapper'>
        <div className='heading'>
            <h1>Notes</h1>
            <h3>Plan Your Day</h3>
        </div>
        <div className='note_container'>

        
       
           {note.length > 0 ? (note.map((n)=>{
            return(
               
                  <motion.div variants={notevarients} initial="hidden" animate="visible"  key={n.id} className='note' style={{backgroundColor:n.color}}>
                 <div className='note_text'>
                    <textarea onChange={(event)=> textget(event.target.value, n.id) } defaultValue={n.text} />
                 </div>
                 <div className='note_date_detail'>
                    <div className='date'>{n.date}</div>
                    <div className='day'>{n.day}</div>
                    <div className='dele'><MdDeleteOutline onClick={()=>qwer(n.id)}/></div>
                 
                 </div>
               
            </motion.div>
           
                
            )
           
           })) : (<h2>No Present Notes</h2>)}
            
            
            </div>
        
    </div>
  )
}

export default NoteContainer