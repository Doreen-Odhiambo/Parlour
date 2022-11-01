import React from 'react'

const mybutton = ({to}) =>{
  return (
    <a href ={`/${to}`}>
        <button className='my-btn'>
            {to=== ''? 'BookAppointment': to}
        </button>
    </a>
  )
}

export default mybutton;