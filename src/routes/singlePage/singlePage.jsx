import React from 'react'
import "./singlePage.scss"
import Slider from '../../components/slider/slider'

const SinglePage = () => {
  return (
    <div className='singlePage'>
      <div className='details'>
        <div className="wrapper">
          <Slider />
          <div className="info">
            <div className="top"></div>
            <div className="bottom"></div>
          </div>
        </div>
      </div>
      <div className='features'>
        <div className="wrapper"></div>
      </div>
    </div>
  )
}

export default SinglePage
