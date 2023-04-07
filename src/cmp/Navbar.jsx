import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <div className="container">
                <div className="navbar">
                    <NavLink to='/' className='nav link1'>Home</NavLink>
                    <NavLink to='/student' className='nav link2'>Student</NavLink>
                    <NavLink to='/contact' className='nav link3'>Contact</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar
