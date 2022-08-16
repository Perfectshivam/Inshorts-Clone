import React from 'react'
import './Navbar.css'
import  HamburgerMenu from '../Drawer/HamburgerMenu'

function NavbarInshorts({setCategory}) {
  return (
    <div>
        <div className='navbar-container'>
            <div className='icon'>
              <HamburgerMenu setCategory={setCategory} />
            </div>
            <img src='https://assets.inshorts.com/website_assets/images/logo_inshorts.png' alt='inshorts-logo' height={'80%'} />
        </div>
    </div>
  )
}

export default NavbarInshorts