import React from 'react'
import singer1 from '../images/singer1.png'
import '../css/SCard.css';

export default function SingerCard() {
  return (
    <div>
      <div className="my-5 mx-10 scard mt-8 h-[600px]">
        <div className='w-[450px] h-auto rounded-t-xl'>
        <img className='mask1 w-[450px] rounded-t-3xl z-1' src={singer1} alt="" srcset="" />
        </div>
    
        <div className="cardDetails w-[100%] rounded-b-3xl flex flex-col justify-end items-center relative bottom-60 h-[450px] bg-gradient-to-b from-[#130B2B01] 0% to-[#130B2B] 55% text-white text-center z-2">
            <h1 className='text-3xl font-bold'>Ash King Live</h1>
            <div className="date container p-4 my-4 rounded-xl flex justify-center bg-gradient-to-b from-[#b6116b] to-[#3b1578] text-white w-[50px] h-auto">
                <p className='py-1'>&nbsp;&nbsp;Tue&nbsp;&nbsp; 14</p>
            </div>
            <div className="date container p-2 mb-5 rounded-xl flex justify-center bg-gradient-to-b from-[#b6116b] to-[#3b1578] text-white w-[auto] h-auto">
                <p className='px-1'>09:00</p>
            </div>
            <button class="mb-6  bg-gradient-to-r from-[#b6116b] to-[#3b1578] hover:from-[#B6116Bcc]  hover:to-[#3B1578cc] text-white font-bold  px-4 rounded-xl h-[50px] w-[400px]">
                RESERVASION
            </button>
        </div>
      </div>
    </div>
  )
}
