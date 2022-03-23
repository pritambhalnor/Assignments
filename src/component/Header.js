import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='App-header-100 App'>
        <Link to="/assignment1">
        <button className='btn-lg btn-outline-warning'>Assignment 1</button>
        </Link>
        <br /><br /><br />
        <Link to="/assignment2">
        <button className='btn-lg btn-outline-warning'>Assignment 2</button>
        </Link>
    </div>
  )
}
