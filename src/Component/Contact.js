import React from 'react'

function Contact() {
  return (
    <div>
      <h1 className='font-bold text-3xl p-2 m-2'>Contact Us</h1>
      <form>
        <input className='border border-black p-2 m-2'placeholder='Name'/>
        <input className='border border-black p-2 m-2'placeholder='message'/>
        <button className='border border-black p-2 m-2 bg-gray-100 rounded-lg'>Submit</button>
      </form>
    </div>
  )
}

export default Contact