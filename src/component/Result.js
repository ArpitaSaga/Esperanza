import React from 'react'
import '../css/Result.css'
export default function Result() {
  return (
    <div className=' my-5 mx-10 flex flex-wrap justify-center w-[100%]'>
      <div className="box bg-gradient-to-b from-[rgba(17, 16, 24, 0.00)] to-[rgba(17, 16, 24, 0.91)] p-4 mx-20 w-[300px] shadow-lg rounded-xl">
        <div className="flex items-center">
            <div className="image w-[30px] h-[30px] rounded-3xl mr-5 border-solid border-2 border-blue-300 bg-gradient-to-b from-[#602EA6] to-[#C977D6]"></div>
            
            <div className="content">
                <h1 className='text-xl font-bold text-indigo-400'>Contact us</h1>
                <p className='text-sm font-thin text-white'>Available 24/7</p>
            </div>
        </div>      
      </div>
      <div className="box bg-gradient-to-b from-[rgba(17, 16, 24, 0.00)] to-[rgba(17, 16, 24, 0.91)] p-4 mx-20 w-[300px] shadow-lg rounded-xl">
        <div className="flex items-center">
            <div className="image w-[30px] h-[30px] rounded-3xl mr-5 border-solid border-2 border-blue-300 bg-gradient-to-b from-[#602EA6] to-[#C977D6]"></div>
            <div className="content">
                <h1 className='text-xl font-bold text-indigo-400'>Contact us</h1>
                <p className='text-sm font-thin text-white'>Available 24/7</p>
            </div>
        </div>      
      </div>
      <div className="box bg-gradient-to-b from-[rgba(17, 16, 24, 0.00)] to-[rgba(17, 16, 24, 0.91)] p-4 mx-20 w-[300px] shadow-lg rounded-xl">
        <div className="flex items-center">
            <div className="image w-[30px] h-[30px] rounded-3xl mr-5 border-solid border-2 border-blue-300 bg-gradient-to-b from-[#602EA6] to-[#C977D6]"></div>
            <div className="content">
                <h1 className='text-xl font-bold text-indigo-400'>Contact us</h1>
                <p className='text-sm font-thin text-white'>Available 24/7</p>
            </div>
        </div>      
      </div>
    </div>
  )
}