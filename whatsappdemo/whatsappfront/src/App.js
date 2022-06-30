import './App.css';
import Sidebar from './components/Sidebar';
import Chatbox from './components/Chatbox';
import { useEffect, useState } from 'react';
import Pusher from "pusher-js" 
 
import  axios from './axios';
 function App() {
  const[messages, setMessages]=useState([])
  useEffect(()=>{
    axios.get('/messages/sync')
    .then(response =>{
      setMessages(response.data)
    })

  },[])
  useEffect(() => {
    const pusher = new Pusher('80b3e37669ae3b9eb93f', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted',(newmessage)=> {
     
      setMessages([...messages,newmessage])
    });
    return ()=>{
      channel.unsubscribe();
      channel.unbind();
    }
  }, [messages])
  console.log(messages)
  return (
    <div className="app">
      <Sidebar/>
     <Chatbox messages={messages}/>
      
    
    </div>
  ); 
}

export default App;
