import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className="header header-style">
            <div className="header-logo">
                <a>Companies logo</a>
            </div>
            <ul className="header-links">
                <li className="header-link-item">
                    <Link to="/">Services</Link>
                </li>
                <li className="header-link-item">
                    <Link to="/culture">Culture</Link>
                </li >
                <li className="header-link-item">
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    )
}
