import React from 'react'
import Bullet from './Bullet'

export default function Experiences(props) {
  return (
    <div>
      <div>
        <h1 className='text-xl font-bold'>Experiences</h1>
        <div className='flex flex-row justify-between'>
          <p className='font-semibold'>{props.company}</p>
          <p className='font-semibold'>{props.year}</p>
        </div>
      </div>
    </div>
  )
}
