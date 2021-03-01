import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Nav extends Component {
    render() {
        return (
            <div>
                <div className="circle-menu">
                    <div className="hamburger">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="hamburger__text">MENU</div>
                    </div>
                </div>
                                
                <div className="nav-wrap">
                    <ul className="nav">
                        <li className="nav__item"><Link to="/">About</Link></li>
                        <li className="nav__item"><Link to="/resume">Resume</Link></li>
                        <li className="nav__item"><Link to="/gallery">Gallery</Link></li>
                        <li className="nav__item"><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}
