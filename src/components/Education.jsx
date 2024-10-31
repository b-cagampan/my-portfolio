import React from 'react'

export default function Education(props) {
  return (
    <div>
        <h1 className='text-xl font-bold'>Education</h1>
        <div className='flex flex-row justify-between'>
            <p className='font-semibold'>{props.school}</p>
            <p className='font-semibold'>{props.year}</p>
        </div>
        <p className='leading-relaxed text-justify text-sm text-neutral-400'>{props.about}</p>
    </div>
  )
}
