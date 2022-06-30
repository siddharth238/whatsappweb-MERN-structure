import React from 'react'
import './Chatmessage.css'
function Chatmessage({name,message,timestamp,recieved}) {
  return (
    <div><p className={`chatbox__message ${recieved? "chatbox__reviever" : ""}`}>
    <span className='chat__name'>
      {name}
    </span>
    {message} 
    <span className='chat__time'>{timestamp}</span>
    </p> </div>
  )
}

export default Chatmessage