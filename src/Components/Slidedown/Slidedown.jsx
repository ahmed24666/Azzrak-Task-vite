import React from 'react'
import './slidedown.scss'
const Slidedown = ({ open, setopen }) => {
    return (
        <div className="slideDown" style={open ? { top: '0' } : { top: '-100vh' }}>
            <ul className="slideDown-nav" style={open ? { display: 'flex', opacity: '1', transition: '1s ease-in-out 1s' } : { transition: 'none' }}>
                <li className="nav-item" onClick={() => setopen(false)}>
                    <a href="" className="nav-link">Home</a>
                </li>
                <li className="nav-item" onClick={() => setopen(false)}>
                    <a href="" className="nav-link">Shop</a>
                </li>
                <li className="nav-item">
                    <a href="" className="nav-link">Artists</a>
                </li>
                <li className="nav-item">
                    <a href="" className="nav-link">Contact</a>
                </li>
                <div className="right">
                    <span className='gradient-text'>
                        START NOW
                    </span>
                </div>
            </ul>
        </div>
    )
}

export default Slidedown