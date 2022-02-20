import React from 'react'

function Team({acters, director}) {

    const robert = "https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/badcb124-2d8c-455b-a8f6-ffd7459fc3be/360";
    const djon = "https://total3d.ru/assets/images/2011/october/Iron_Man_3_v_3d_3.jpg";
    console.log(acters)
  return (
    <div className="team">
        <div className="acters">
            <div className="tag">
                <h3 className='tag-act'>Актеры</h3>
            </div>
            {acters&&
                acters.map((acter,index)=>(
                    <div key={index} className="acter">
                        <img className='img-actor' src={acter.img} alt="" />
                        <span className='name-actor'>{acter.name}</span>
                    </div>
                ))
            }
            {

            }
            <div className="director">
                <h3 className='tag-dir'>Режиссер</h3>
                <img className='img-actor' src={director.img} alt="" />
                <span className='name-director'>{director.name}</span>
            </div>
        </div>
    </div>
        
  )
}

export default Team