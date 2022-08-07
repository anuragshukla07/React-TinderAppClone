// type rfce for snippets , 
// file name should start from capital letter
// function name should be file name

import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import './Header.css';

function Header() {
  return (
    <div className='tinder-header'>
        <PersonIcon className='header-icons' fontSize='large'/>
        <WhatshotIcon className='header-icons' fontSize='large'/>
        <ChatIcon className='header-icons' fontSize='large'/>
    </div>
  )
}

export default Header