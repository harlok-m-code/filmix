import React, { useState } from 'react'
import Content from '../components/Content'
import Header from '../components/Header'
import Search from '../components/Search'

function Home() {

  return (
    <div>
        <Header/>
        <Search/>
        <Content/>
    </div>
  )
}

export default Home