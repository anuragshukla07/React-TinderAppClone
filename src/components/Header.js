// type rfce for snippets , 
// file name should start from capital letter
// function name should be file name

import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import './Header.css';
import { IconButton } from '@mui/material';

function Header() {
  return (
    <div className='tinder-header'>
       <IconButton >
        <PersonIcon className='header-icons' fontSize='large' />
       </IconButton> 
       <IconButton>
       <WhatshotIcon className='header-logo' fontSize='large'/>
       </IconButton>
        <IconButton >
        <ChatIcon className='header-icons' fontSize='large'/>
        </IconButton>
    </div>
  )
}

export default Header