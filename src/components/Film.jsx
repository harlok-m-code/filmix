import React, { useEffect, useState } from 'react'
import Checkbox from './Checkbox'
import FilmItem from './FilmItem';
import { useSelector } from 'react-redux';


function Film() {

  const films = useSelector(({films}) => films.films)

  return (
    <div className='container'>
      <Checkbox/>
      {films&&
        films.map((film,index) => (
          <FilmItem key={index} {...film}/>
        ))
      }
    </div>
    
  )
}

export default Film