import React, { useRef } from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navebar = () => {

    const gitLinkFunction = () => {
        window.open('https://github.com/Yonko-Kunal', '_blank')
    };

    const menuRef = useRef()

    const openMenu = () => {
        menuRef.current.style.right = "0"
    }
    const closeMenu = () => {
        menuRef.current.style.right = "-600px"
    }

    return (
        <div className='Navbar'>
            <div className="nav-mob-open" onClick={openMenu}><i class="fa-solid fa-bars"></i></div>
            <nav>
                <ul ref={menuRef} className="nav-menu">
                    <div className='nav-mob-close' onClick={closeMenu}><i class="fa-solid fa-xmark" ></i></div>
                    <hr className='nav-line' />
                    <li><AnchorLink onClick={closeMenu} className='anchor-list' href='#homeId'><p>Home</p></AnchorLink></li><hr className='nav-line' />
                    <li><AnchorLink onClick={closeMenu} className='anchor-list' offset={50} href='#aboutId'><p>About Me</p></AnchorLink></li><hr className='nav-line' />
                    <li><AnchorLink onClick={closeMenu} className='anchor-list' offset={50} href='#projectId'><p>Portfolio</p></AnchorLink></li><hr className='nav-line' />
                    <li><AnchorLink onClick={closeMenu} className='anchor-list' offset={50} href='#contactId'><p>Contact</p></AnchorLink></li><hr className='nav-line' />
                </ul>

            </nav>

            <div className='nav-right'>
                <div className="git-logo"><i onClick={gitLinkFunction} class="fa-brands fa-github"></i></div>
                <div className="nav-connect"><AnchorLink className='anchor-list' offset={50} href='#contactId'>Connect With Me</AnchorLink></div>
            </div>

        </div>
    )
}

export default Navebar