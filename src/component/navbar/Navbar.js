import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './navbar.css'
function Navbar() {
    return (
        <>
            <div className='navbar__main container'>
                <div className='navbar_inner'>
                    <div className='navbar_link'>
                        <img src={require('../../assets/logo.svg').default} alt="logo-img" />
                        <ul className='link'>
                            <li><a href="../howWork/work.js">How It Works</a></li>
                            <li><a href="../developer/developer.js">For Developers</a></li>
                            <li><a href="../developer_health/Health.js">Developer Health</a></li>
                            <li><div className='dropdown'>
                                <a className="dropbtn">Resources
                                    <FontAwesomeIcon icon="coffee" />
                                    <div className="dropdown-content">
                                        <a href="#">React</a>
                                        <a href="#">React Native</a>
                                        <a href="#">Developer Health</a>
                                        <a href="#">Job Search</a>
                                        <a href="#">Remote Work</a>
                                        <a href="#">Hiring Developers</a>
                                    </div>
                                </a>
                            </div>
                            </li>
                        </ul>
                    </div>
                    <div className='user-nav'>
                        <ul className='link'>
                            <li><a href="../howWork/work.js">SIGN IN</a></li>
                            <li><a href="../developer/developer.js">APPLY FOR JOBS</a></li>
                            <li><a href="../developer_health/Health.js">HIRE DEVELOPERS</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar