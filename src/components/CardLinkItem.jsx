import React from 'react'

const CardLinkItem = ({ link }) => {
  return (
    <div className='bg-gray-custom font-bold py-3 text-center rounded-lg cursor-pointer text-white-custom hover:bg-green-custom hover:text-gray-custom w-full'>
      <span>{link}</span>
    </div>
  )
}

export default CardLinkItem