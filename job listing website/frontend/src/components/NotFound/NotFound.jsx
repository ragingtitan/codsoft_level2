import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
        <section className=' text-white w-full'>
          <div className="content flex flex-col items-center w-full justify-center" >
            <img src="/notfound.png" alt="notfound" width={800}/>
            <Link className='my-4' to={'/'}>RETURN TO HOME PAGE</Link>
          </div>
        </section>
    </>
  )
}

export default NotFound
