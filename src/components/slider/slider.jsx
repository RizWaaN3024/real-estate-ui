import React from 'react'
import "./slider.scss"

const Slider = ({images}) => {
  return (
    <div className='slider'>
        <div className="bigImage">
            <img src={images[0]} alt="" />
        </div>
        <div className="smallImages">
            {images.slice(1).map((image, index) => (
                <img src={image} alt="" key={index} />
            ))}
        </div>
    </div>
  )
}

export default Slider
