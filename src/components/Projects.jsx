import React from 'react'

export default function Projects(props) {
  return (
    <div>
      <div>
        <p className='font-semibold'>{props.name}</p>
        <p className='leading-relaxed text-justify text-sm text-neutral-400'>{props.description}</p>
        <p className='leading-normal text-justify text-sm text-neutral-700 font-mono'>{props.stacks}</p>
      </div>
    </div>
  )
}
