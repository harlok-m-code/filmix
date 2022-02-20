import React, {useState, useEffect} from 'react'
import Film from './Film'
import Navbar from './Navbar'
import { actionFilms } from '../redux/actions/films'
import { useDispatch } from 'react-redux'
import axios from 'axios';
import '../css/main.css'

function Content() {

  const dispatch = useDispatch();

  const fetchFilms = async () => {
    try {
      const film = await axios.get("http://localhost:3001/films").then((res)=> dispatch(actionFilms(res.data)));
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=> {
    fetchFilms()
  },[])

  return (
    <div className='main bg-dark'>   
        <Navbar/>
        <Film/>
    </div>
  )
}

export default Content