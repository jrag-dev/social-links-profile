import React from 'react'
import CardLinkItem from './CardLinkItem'
import { linksData } from '../data'

const CardUser = () => {
  return (
    <div className="bg-dark-gray-custom rounded-lg px-6 mx-6 py-6 w-full max-w-[375px] flex flex-col items-center">
      <img className='rounded-full w-24 h-24 mb-2' src='../images/avatar-jessica.jpeg' alt='foto' />
      <div className='py-4 text-white-custom my-2 flex flex-col items-center gap-2'>
        <h1 className='text-2xl text-while-custom font-semibold'>Jessica Randall</h1>
        <p className='text-green-custom font-bold'>London, United Kingdom</p>
      </div>
      <p className='text-white-custom font-medium'>"Front-end developer and avid reader."</p>
      <div className='mt-6 flex flex-col items-center w-full gap-4'>
        {
          linksData.map(item =>
            <CardLinkItem
              key={item.link}
              link={item.link}
            />
          )
        }
      </div>
    </div >
  )
}

export default CardUser
