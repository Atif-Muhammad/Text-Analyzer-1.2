import React from 'react'
import image from '../file-pen-line.svg'
export default function Loading() {
  return (
    <div className='loader'>
        <div className="outercircle">
            <div className="innercircle">
                <img src={image} alt="img" />
            </div>
        </div>
    </div>
  )
}
