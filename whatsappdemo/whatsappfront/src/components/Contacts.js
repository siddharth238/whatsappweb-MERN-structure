import React from 'react'
import Avatar from '@mui/material/Avatar';
import './Contacts.css'

function Contacts() {
  return (
    <div className='contacts'> 
        <Avatar/>
        <div className='contacts__right'>
            <h3 >Contact name</h3>
            <p>Last message received....</p>
        </div>
    </div>
  )
}

export default Contacts