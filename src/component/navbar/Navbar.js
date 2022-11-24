import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import './navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {

    return (
        <>
            <div className='navbar__main container'>
                <div className='navbar_inner'>
                    <div className='navbar_link'>
                        <img src={require('../../assets/logo.svg').default} alt="logo-img" />
                        <ul className='link'>
                            <li><Link to="/">How It Works</Link></li>
                            <li><Link to="/Developer">For Developers</Link></li>
                            <li><Link to="/Health">Developer Health</Link></li>
                            <li><div className='dropdown'>
                                <Link className="dropbtn"><span>Resources
                                    <FontAwesomeIcon className='upArrow' icon={faAngleDown} />
                                    <FontAwesomeIcon className='downArrow' icon={faAngleUp} /></span>
                                    <div className="dropdown-content">
                                        <Link to="#">React</Link>
                                        <Link to="#">React Native</Link>
                                        <Link to="#">Developer Health</Link>
                                        <Link to="#">Job Search</Link>
                                        <Link to="#">Remote Work</Link>
                                        <Link to="#">Hiring Developers</Link>
                                    </div>
                                </Link>
                            </div>
                            </li>
                        </ul>
                    </div>
                    <div className='user-nav'>
                        <ul className='link'>
                            <li><Link to="">SIGN IN</Link></li>
                            <li><Link to="">APPLY FOR JOBS</Link></li>
                            <li><Link to="" className='hire_developer'>HIRE DEVELOPERS</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar