import React from 'react'
import "./singlePage.scss"
import Slider from '../../components/slider/slider'
import Map from '../../components/map/Map'
import { singlePostData, userData } from "../../lib/dummydata"

const SinglePage = () => {
  return (
    <div className='singlePage'>
      <div className='details'>
        <div className="wrapper">
          <Slider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">
                  $ {singlePostData.price}
                </div>
              </div>
              <div className="user">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">
              {singlePostData.description}
            </div>
          </div>
        </div>
      </div>
      <div className='features'>
        <div className="wrapper">
          <p className='title'>General</p>
          <div className="listVertical"></div>
          <p className='title'>Sizes</p>
          <div className="sizes"></div>
          <p className='title'>Nearby Places</p>
          <div className="listHorizontal"></div>
          <p className='title'>Location</p>
          <div className="mapContainer">
            <Map />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SinglePage
