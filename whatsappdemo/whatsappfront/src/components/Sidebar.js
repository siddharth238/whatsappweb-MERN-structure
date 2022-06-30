import React from 'react'
import './Sidebar.css'
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Contacts from './Contacts';
function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar__head'>
        <div className='sidebar__head_left'>
          <Avatar alt="Remy Sharp" src="https://lh3.googleusercontent.com/a-/AOh14GjT2IxzmVe79VnobhzDWIeo9jLA_veu_OmyKWg8=s360-p-rw-no" />
        </div>
        <div className='sidebar__head_right'>
          <IconButton >
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
      {/* search */}
      <div className='sidebar__search'>
        <div className='sidebar__searchContainer'>


          <TextField id="outlined-basic" label="Search" variant="outlined" />
        </div>
      </div>
      <div className='sidebar__body'>
        {/* contacts */}
        <Contacts />
        <Contacts />
        <Contacts />

      </div>
    </div>
  )
}

export default Sidebar