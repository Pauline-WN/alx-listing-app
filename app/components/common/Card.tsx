import React from 'react'
import { CardProps } from '../../interfaces'

const Card: React.FC<CardProps> = ({ title, image, price, location }) => {
  return (
    <div className="border p-4 rounded-md shadow-md">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <h2 className="font-bold text-xl mt-2">{title}</h2>
      <p>{location}</p>
      <p className="text-pink-600 font-semibold">${price}/night</p>
    </div>
  )
}

export default Card
