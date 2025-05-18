import React from 'react'
import { ButtonProps } from '../../../interfaces'

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700">
      {label}
    </button>
  )
}

export default Button
