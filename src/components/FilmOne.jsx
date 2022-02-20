import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../css/filmOne.css'
import '../css/film.css'
import axios from 'axios';
import Player from './Player';
import Team from './Team';

function FilmOne() {
    
  const {id} = useParams();
  const [film,setFilm] = useState([]);
  const { name, imgUrl, year, country, timing, description, genres, acters,director } = film;

  const fetchFilm = async (id) => {
    try {
      const film = await axios.get(`http://localhost:3001/films/${id}`).then((res)=> setFilm(res.data));
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=> {
    fetchFilm(id)
  },[id])

  return (
    <>
      <div className="film">
        {/* занеси theme  в redux и тема будет работать */}
        <div className="container">
            <img className='img-film-one' src={imgUrl} alt="" />
            <h1 className='name-filme'>{name}</h1>
            <time className='year'>{year} </time>
            {genres&&
              genres.map((genre, index) => (
                <span key={index} className='genres'>{genre}</span>
              ))
            }
            
            <span className='country'>{country}</span>
            <div className='tim'>
               <span className='timing'>Full HD {timing} минут</span>
            </div>
            <p className='description'>{description}</p>
               <Player/>
               <Team acters={acters} director={director}/>
        </div>
    </div>
    </>
    
  )
}

export default FilmOne