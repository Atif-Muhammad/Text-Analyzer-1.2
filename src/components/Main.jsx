import React from 'react'
import Left from './Left'
import Right from './Right'

export default function Main() {
  return (
    <div className='d-flex justify-content-between maindiv'>
        <Left/>
        <Right/>
    </div>
  )
}
