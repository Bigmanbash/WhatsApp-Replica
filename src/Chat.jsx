import React, { useState, useEffect } from 'react'
import './Chat.css'
import { Avatar, IconButton } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicNoneIcon from '@mui/icons-material/MicNone';
import axios from './axios'

function Chat({ messages }) {
    const [input, setInput] = useState('')
    const [seed, setSeed] = useState('')

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])

    const sendMessage = async (e) => {
        e.preventDefault();

        await axios.post('/messages/new', {
            message: input,
            name: "DEMO APP",
            timestamp: "Future tense",
            received: true,
        })

        setInput('');
    }

    return (
        <div className='chat'>
            <div className='chat__header'>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

                <div className='chat__headerInfo'>
                    <h3>Room name</h3>
                    <p>Last seen...</p>
                </div>

                <div className='chat__headerRight'>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className='chat__body'>

                {messages.map((message) => (
                    <p className={`chat__message ${message.received && "chat__receiver"}`}>
                        <span className='chat__name'>{message.name}</span>
                        {message.message}
                        <span className='chat__timestamp'>{message.timestamp}</span>
                    </p>
                ))}
                
            </div>

            <div className='chat__footer'>
                <InsertEmoticonIcon />
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} placeholder='Type a message' type='text' />
                    <button onClick={sendMessage} type='submit'>Send</button>
                </form>
                <MicNoneIcon />
            </div>
        </div>
    )
}

export default Chat