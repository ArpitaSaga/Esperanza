import * as React from "react";
import ticket from '../images/Ticket.png'
import Ticket_left from '../images/Ticket_left.png'
import Ticket_right from '../images/Ticket_right.png'
import '../css/card.css';

export default function Card() {
  return (
    <>
    <div className="card my-5 mx-10 max-sm:my-5 flex flex-col rounded-3xl border-blue-500 border-solid bg-slate-800 border-[1.571px] w-[380px]">
      <div className="flex overflow-hidden relative flex-col items-center px-5 py-2 w-full min-h-[541px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4a6dab8580575564e7ba8241c10e44386d5a1ce505082fc7ab286114b12994f?"
          className="object-cover absolute inset-0 size-full rounded-3xl"
        />
        
        <div className="relative text-xl text-center text-white whitespace-nowrap ">
          ON SLAM POETRY
        </div>

        {/* <img className=" w-[272px]" src="{ticket}" alt="" srcset="" /> */}
        <div className="divider flex relative flex-col justify-center self-stretch mt-3 w-[380px] border-solid border-purple-800 border-opacity-10">
          <div className="w-full rounded-lg bg-blend-overlay min-h-[2px]" />
        </div>
        
        <img
          src={Ticket_left}
          className="tleft rotate-6 me-8 mt-16 pdmax-w-full absolute bottom-25 aspect-[0.62] w-[220px] z-9"
        />
        <img
          src={Ticket_right}
          className="tright -rotate-6  ml-8 mt-16 max-w-full absolute bottom-25 aspect-[0.62] w-[220px] z-9 hover:rotate-6"
        />
        <div className="absolute">
            <img
          src={ticket}
          className="mt-16 max-w-full bottom-25 aspect-[0.62] w-[220px] z-10 "
        />
            <div className="card-txt text-center w-[100%] z-10 text-white absolute bottom-3 text-xs">
                DATE:10/03/2024 &nbsp;&nbsp; TIME:9:00
                <br />
                VENUE: CGEC CAMPUS
                <br />
                <button class="mt-2  bg-blue-500 hover:bg-blue-700 text-white font-bold  px-4 rounded-xl h-[30px]">
  REGISTER
</button>

            </div>
        </div>
        
        <div className="text-white absolute bottom-5 px-20 text-center">
        <p>Unleash your words, ignite the stage: Let your poetry roar at our slam!</p>
      </div>
      </div>
      
    </div>
    {/* <img src= alt="fgrgh" srcset="" /> */}
    </>
  );
}



