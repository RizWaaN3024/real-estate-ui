import React from 'react'
import "./card.scss"
import { Link } from 'react-router-dom'

const Card = ({item}) => {
  return (
    <div className='card'>
      <Link to={`/${item.id}`} className='imageContainer'>
        <img src={item.img} alt="" />
      </Link>
      <div className='textContainer'>
        <h2 className='title'>
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className='address'>
          <img src="/pin.png" alt="" />
          <span>{item.address}</span>
        </p>
      </div>
    </div>
  )
}

export default Card
