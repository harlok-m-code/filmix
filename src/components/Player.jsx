import React from 'react'
import ReactPlayer from 'react-player'
import '../css/player.css'

function Player() {

  const url = "https://yandex.ru/video/preview/?filmId=12978156156259667759&from=tabbar&parent-reqid=1645098790796921-7769844159423839246-sas2-2338-sas-l7-balancer-8080-BAL-4621&text=%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE"

  return (
    <div className='player'> 
        <ReactPlayer url={url}
         controls={true} width="1200px" height="650px"/>
    </div>
  )
}

export default Player