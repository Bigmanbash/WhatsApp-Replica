import React from 'react'
import './Sidebar.css'
import { Avatar, IconButton } from '@mui/material';
import DonutLargeIcon from '@mui/icons-material/DonutLarge'
import ChatIcon from '@mui/icons-material/Chat'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import SearchIcon from '@mui/icons-material/Search';
import SidebarChat from './SidebarChat';

function Sidebar() {
    return  (
        <div className='sidebar'>
            <div className='sidebar__header'>
                <Avatar src="data:image/jpeg;base64,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" />         
                <div className='sidebar__headerRight'>
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className='sidebar__search'>
                <div className='sidebar__searchContainer'>
                    <SearchIcon />
                    <input placeholder="Search or start new chat" type="text" />
                </div>
            </div>

            <div className='sidebar__chats'>
                <SidebarChat addNewChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>

        </div>

    )
}

export default Sidebar