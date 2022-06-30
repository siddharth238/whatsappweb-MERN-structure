import React from 'react'
import './Chatbox.css'
import Avatar  from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton } from '@mui/material';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import Chatmessage from './Chatmessage';
import { useState } from 'react';
 
import axios from './../axios';
function Chatbox({messages}) {
  const [input,setInput] =useState('');
   const sendMessage=(e)=>{
    e.preventDefault();
    axios.post("/messages/new",{
      message:input,
      name:"Sid",
      timestamp:"Just now",
      received:false
    })
    setInput("")
   }
  return (

    <div className='chatbox'>
      <div  className='chatbox__head'>
       <Avatar/>
        <div className='chatbox__head_info'>
          <h3>Chat Info</h3>
          <p style={{color:"gray"}}>Time data etc
            asdasd
            sadasdas
            <fsadfsfa></fsadfsfa>
          </p>
        </div>
        
        <div className='chatbox__head_icons'>
          <IconButton><SearchIcon/></IconButton>
          <IconButton><AttachFileIcon/></IconButton>
          <IconButton><MoreVertIcon/></IconButton>
          
          
          
          {/* Icons */}
        </div>
      </div>
      <div className='chatbox__body'>
        {messages.map((message)=>{
            return( 
            <Chatmessage  message={message.message} timestamp={message.timestamp} recieved={message.received}/>

             
             )
        })}
     
 
          
      </div>
      <div className='chatbox__footer'>
        <IconButton ><InsertEmoticonIcon  /></IconButton>
      
        <form >
          <input value={input} onChange={(e)=>setInput(e.target.value)} placeholder='Type a message'/>
          <button onClick={sendMessage} >Send message</button>
        </form>
        <IconButton ><MicIcon/></IconButton>
      </div>
    </div>
  )
}

export default Chatbox