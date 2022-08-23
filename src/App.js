
import { useEffect, useState } from 'react';
import './App.css';
import Button from './Components/Button';
import NoteContainer from './Components/NoteContainer';
import moment from 'moment';



function App() {
   
  const[Note,setNote] = useState(JSON.parse(localStorage.getItem("note-app")) || [])

   const crtNote = (color)=>{
      const copyolddata = [...Note]

        const NewNote = {
           id:Date.now() + Math.floor(Math.random())*7,
           text:"",
           date:moment().format('h:mm: a'),
           day:moment().format('D MMMM'),
           color,
        }

        copyolddata.push(NewNote);
        setNote(copyolddata)
        console.log(copyolddata)
   }

   const delnote= (id)=>{
       setNote(Note.filter((c)=>{return( c.id !== id )}))
   } 

  
  
   const textinapp =(usertext,id) =>{
    const copyolddata = [...Note]

    const index = copyolddata.findIndex((item)=>item.id === id);
    if (index < 0)return;
       
       copyolddata[index].text = usertext
       setNote(copyolddata)
   }

   useEffect(()=>{
      
    localStorage.setItem("note-app", JSON.stringify(Note))
},[Note])


  return (
    <div className="app">
      <div className='whole_app'>
      <div className='note_create_container'>
      <Button abc={crtNote}/>
      </div>
      <div className='note_shown_container'>
      <NoteContainer note={Note} qwer={delnote} textget={textinapp} />
      </div>
      </div>
      
       
    
    </div>

    // <>
    //  <Debounce />
    // </>


  );
}

export default App;
