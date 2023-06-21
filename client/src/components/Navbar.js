import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
    const activeStyles = {
        fontWeight: "bold",
        color: "red",
        textDecoration: "underline"
}

return (
    <header>
        <Link className="site-logo" to="#">#Rummy</Link>
        <nav>
            <NavLink
                to="host"
                style={({ isActive }) => isActive ? activeStyles : null}
                // className={({ isActive }) => isActive ? "active-link" : null}
            >Host</NavLink>
            <NavLink
                to="about"
                style={({ isActive }) => isActive ? activeStyles : null}
                // className={({ isActive }) => isActive ? "active-link" : null}
            >About</NavLink>
            <NavLink
                to="vans"
                style={({ isActive }) => isActive ? activeStyles : null}
                // className={({ isActive }) => isActive ? "active-link" : null}
            >Vans</NavLink>
            {/* <Link to="/about">About</Link>
            <Link to="/vans">Vans</Link> */}
        </nav>
    </header>

)
}

export default Navbar