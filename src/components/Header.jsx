import React from 'react'
import '../css/header.css'
import Search from './Search'

function Header() {
  return (
    <div>
        <nav className='navbar navbar-dark bg-dark'>
          <div className ="container-fluid">
              <span className ="navbar-brand mb-0 h1 logo">FilMix</span>
          </div>
        </nav>
    </div>
  )
}

export default Header