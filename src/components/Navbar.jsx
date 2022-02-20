import React from 'react'

function Navbar() {
  return (
    <nav className="nav nav-main">
            <a className="nav-link active" aria-current="page" href="#">Фильмы</a>
            <a className="nav-link" href="#">Жанры</a>
            <a className="nav-link" href="#">Топ просмотров</a>
    </nav>
  )
}

export default Navbar