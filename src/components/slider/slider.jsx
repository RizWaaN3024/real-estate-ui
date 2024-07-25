import React, { useState } from 'react'
import "./slider.scss"

const Slider = ({images}) => {
  const [imageIndex, setImageIndex] = useState(null);
  return (
    <div className='slider'>
      {imageIndex !== null && (
      <div className="fullSlider">
        <div className="arrow">
          <img src="/arrow.png" alt="" />
        </div>
        <div className="imgContainer">
          <img src={images[imageIndex]} alt="" />
        </div>
        <div className="arrow">
          <img src="/arrow.png" className='right' alt="" />
        </div>
        <div className='close'>X</div>
      </div>
      )}
        <div className="bigImage">
            <img src={images[0]} alt="" onClick={() => setImageIndex(0)} />
        </div>
        <div className="smallImages">
            {images.slice(1).map((image, index) => (
                <img src={image} alt="" key={index} onClick={() => setImageIndex(index)} />
            ))}
        </div>
    </div>
  )
}

export default Slider
