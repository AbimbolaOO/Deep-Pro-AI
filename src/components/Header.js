import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <a>Companies logo</a>
            <div>
                <ul>
                <li>
                    <Link to="/">Services</Link>
                </li>
                <li>
                    <Link to="/culture">Culture</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                </ul>
            </div>
        </div>
    )
}
