import React from 'react'
import { Link } from 'react-router-dom'

const NavMenu = ()=>{
    return (
        <ul>
          <li>
            <Link to="/public">Public Page</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
    )
}

export default NavMenu
