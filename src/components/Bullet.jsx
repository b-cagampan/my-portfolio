import React from 'react'

export default function Bullet(props) {
  return (
    <div>
        <ul>
            <li className='leading-relaxed text-justify text-sm text-neutral-400'>
              {props.description}  
            </li>
        </ul>
    </div>
  )
}
