import React from 'react'
import { Link } from 'react-router-dom';

function FilmItem({ id, imgUrl, name }) {

  return (
      <Link to={`/${id}`}>
        <div className="film-i">
            <img className='film-img' src={imgUrl} alt="image" />
            <h4 className='name-film'>{name}</h4>
        </div>  
      </Link>
  )
}

export default FilmItem