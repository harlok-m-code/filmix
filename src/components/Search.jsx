import React from 'react'

function Search() {
  return (
    <div className ="container-fluid search">
          <form className ="d-flex">
            <input className ="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className ="btn btn-outline-dark" type="submit">Search</button>
          </form>
    </div>
  )
}

export default Search