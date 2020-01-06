import React from 'react'
import { Link } from 'react-router-dom'

export const Menu = props => (
  <nav id='menu'>
    <Link to='/'>Usuarios</Link>
    <Link to='/tasks'>Tareas</Link>
  </nav>
)
