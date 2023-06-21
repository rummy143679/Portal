import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function HostLayout() {
  const activeStyles = {
    fontWeight: "bold",
    color: "red",
    textDecoration: "underline"
  }
  return (
    <div>
      <nav className='host-nav'>
        <NavLink
          to="/host"
          end
          style={({ isActive }) => isActive ? activeStyles : null}

        >Dashboard</NavLink>
        <NavLink
          to={`income`}
          style={({ isActive }) => isActive ? activeStyles : null}
        >Income</NavLink>
        <NavLink
          to={`vans`}
          style={({ isActive }) => isActive ? activeStyles : null}
        >vans</NavLink>
        <NavLink
          to={`reviews`}
          style={({ isActive }) => isActive ? activeStyles : null}
        >Reviews</NavLink>
      </nav>
      <Outlet />
    </div>
  )
}

export default HostLayout