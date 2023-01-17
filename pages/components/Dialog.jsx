import React from 'react'

const Dialog = () => {
    // if(!visible) return null;
  return (
    <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
        <div className='bg-white p-2 rounded'>MyDialog</div>
    </div>
  )
}

export default Dialog