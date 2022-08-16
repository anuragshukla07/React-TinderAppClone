import React from 'react'
import './Footer.css'
import { IconButton } from '@mui/material';
import ReplayCircleFilledIcon from '@mui/icons-material/ReplayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FlashOnIcon from '@mui/icons-material/FlashOn';

function Footer() {
  return (
    <div className='tinder-footer'>
      <IconButton className='replay'>
        <ReplayCircleFilledIcon fontSize='large'/>
      </IconButton>

      
      <IconButton className='favorite'>
        <FavoriteIcon fontSize='large'/>
      </IconButton>

      
      <IconButton className='close'>
        <CloseIcon fontSize='large'/>
      </IconButton>

      
      <IconButton className='starrate'>
        <StarRateIcon fontSize='large'/>
      </IconButton>

      
      <IconButton className='flashon'>
        <FlashOnIcon fontSize='large'/>
      </IconButton>

    </div>
  )
}

export default Footer