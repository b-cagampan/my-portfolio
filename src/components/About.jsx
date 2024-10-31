import React from 'react'

export default function About(props) {
  return (
    <div>
      <h1 className='text-xl font-bold'>About</h1>
      <h2 className='font-semibold'>{props.name}</h2>
      <p className='leading-relaxed text-justify text-sm text-neutral-400'>{props.description}</p>
    </div>
  )
}
