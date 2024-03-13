import React from 'react'
import videobg from '../images/bgvideo.mp4'
import '../css/culture.css'
import Card from './Card'

export default function Culture() {
  return (
    <div>
      <div className="header grid md:grid-cols-2 bg-gradient-to-r from-[#161d3c] to-[#200C26]">
        
        <video 
            src={videobg}
            autoPlay
            muted
            loop
            className='mask1  object-cover relative left-0 p-0 m-0'/>
            <div className='bg-gradient-to-r from-[#161d3c] via-[#08123a] to-[#200C26] relative right-0 top-0 '>
              <div className='text-white flex flex-col justify-center items-center px-10 pt-14'>
                    <h1 className='heading text-4xl font-400 pb-1  bg-gradient-to-r from-[#D4C2D7] to-[#C977D6]'>CULTURAL EVENTS</h1>
                    <p className='leading-5 pb-4 text-justify px-8 text-[#ccc]'>Celebrate the rich tapestry of cultures with an array of vibrant performances, captivating exhibitions, and engaging workshops. Immerse yourself in a world of creativity and expression at our cultural events, where every moment is a celebration of diversity and talent.</p>
                    <Card/>
                </div>
                <div className='box-container absolute bottom-0 -left-[100%] flex flex-col flex-wrap justify-center bg-gradient-to-b from-[rgba(17, 16, 24, 0.00)] to-[rgba(17, 16, 24, 0.91)]'>
              <div className="box-top py-5 px-5 w-[320px] shadow-lg">
                <div className="flex items-center">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/5792a03d4e2c83a1e83e8ffa82864b9e287a3e81115979586d07aecccf2eba16?"
                      className="w-[40px] aspect-square fill-[radial-gradient(137.13%_253.39%_at_76.68%_66.67%,#602EA6_0%,#C977D6_100%)] max-w-[48px] stroke-[2px] stroke-white mr-5"
                    />
                    <div className="content">
                        <h1 className='text-xl font-bold text-white'>Explore</h1>
                        <p className='text-sm font-thin text-white'>Where curiosity fuels discovery</p>
                    </div> 
                </div> 
                <div className='bottom-divider'></div>     
              </div>
              <div className="box-top py-5 px-5 w-[320px] shadow-lg">
                <div className="flex items-center">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/5792a03d4e2c83a1e83e8ffa82864b9e287a3e81115979586d07aecccf2eba16?"
                      className="w-[40px] aspect-square fill-[radial-gradient(137.13%_253.39%_at_76.68%_66.67%,#602EA6_0%,#C977D6_100%)] max-w-[48px] stroke-[2px] stroke-white mr-5"
                    />
                    <div className="content">
                        <h1 className='text-xl font-bold text-white'>schedule</h1>
                        <p className='text-sm font-thin text-white'>Stay on track and in control</p>
                    </div>
                </div>    
              </div>
              <div className="box-top py-5 px-5 w-[320px] shadow-lg">
                <div className="flex items-center">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/5792a03d4e2c83a1e83e8ffa82864b9e287a3e81115979586d07aecccf2eba16?"
                      className="w-[40px] aspect-square fill-[radial-gradient(137.13%_253.39%_at_76.68%_66.67%,#602EA6_0%,#C977D6_100%)] max-w-[48px] stroke-[2px] stroke-white mr-5"
                    />
                    <div className="content">
                        <h1 className='text-xl font-bold text-white'>Benefits</h1>
                        <p className='text-sm font-thin text-white'>Unlock the rewards</p>
                    </div>
                </div> 
                <div className='bottom-divider'></div>      
              </div>
      </div>
            </div>

            
        
    </div>
    </div>
  )
}
