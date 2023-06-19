import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <header>
            <Link className="site-logo" to="/">#Rummy</Link>
            <nav>
                <Link to="/about">About</Link>
                <Link to="/vans">Vans</Link>
            </nav>
        </header>

    )
}

export default Navbar