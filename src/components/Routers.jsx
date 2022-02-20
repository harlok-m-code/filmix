import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import OneFilm from '../pages/OneFilm';
import Genres from './Genres';

function Routers() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:id" element={<OneFilm/>}/>
        <Route path="/genres" element={<Genres/>}/>
        {/* <Route path="/top" element={}/> */}
    </Routes>
  )
}

export default Routers