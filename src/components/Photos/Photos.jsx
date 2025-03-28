import React from 'react'
import './Photos.css'
import gallery_1 from '../../assets/6.png'
import gallery_2 from '../../assets/7.png'
import gallery_3 from '../../assets/8.png'
import gallery_4 from '../../assets/9.png'

const Photos = () => {
  return (
     <div className='photos' >

        <div className="gallery">
            <img src={gallery_1} alt='' />
            <img src={gallery_2} alt='' />
            <img src={gallery_3} alt='' />
            <img src={gallery_4} alt='' />
        </div>
      <button className='btn dark-btn'>See more here</button>
    </div>
  )
}

export default Photos
 