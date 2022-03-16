import React from 'react'
import './Footer.scss';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
  return (
    <div className="footer">
        <p>La Central 2022</p>
        <div className='footer__raw'>
          <FacebookIcon className='footer__raw__icon'/>
          <TwitterIcon className='footer__raw__icon'/>
          <InstagramIcon className='footer__raw__icon'/>

          
        </div>
    </div>
   
  )
}