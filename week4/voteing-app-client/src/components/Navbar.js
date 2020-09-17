import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props){
  const { logout } = props
  return (
    <div className="navbar">
    <Link to="/profile">Your Market</Link> 
      <Link to="/public">Stalk Market</Link>
      <button onClick={logout}>Logout</button>
    </div>
  )
}