import React, { useEffect, useState } from 'react'
import './App.css'
import Sidebar from './Sidebar'
import Chat from './Chat'
import Pusher from 'pusher-js'
import axios from './axios'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {

  const [messages, setMessages] = useState([])  //This stores the messages

  useEffect(() => {
      axios.get('/messages/sync')
        .then(response => {               //This code snippet fetches all the data
          setMessages(response.data)
        })
  }, [])

  useEffect(() => {
    const pusher = new Pusher('7e19594d3fae4ab403cf', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('messages');    //I changed from my-channel and my-event on pusher site to 
    channel.bind('inserted', function(newMessage) {       //messages and inserted respectively from pusher.trigger
      setMessages([...messages, newMessage])                  //in Fetch Server Time from server.js
      
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [messages])

  console.log(messages)
  

  return (
    <Router basename={import.meta.env.DEV ? '/' : '/WhatsApp-Replica/'}>
        <div className='app'>
          <div className='app__body'>
            <Sidebar />
            <Chat messages = {messages}/>
          </div>
        </div>
    </Router>
  )
}

export default App
