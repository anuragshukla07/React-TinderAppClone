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
       <IconButton className='header-icons' fontSize='large'>
        <PersonIcon />
       </IconButton> 
        <WhatshotIcon className='header-icons' fontSize='large'/>
        <IconButton className='header-icons' fontSize='large'>
        <ChatIcon />
        </IconButton>
    </div>
  )
}

export default Header