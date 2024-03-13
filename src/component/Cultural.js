import React from 'react'
import Card from './Card';
import SingerCard from './SingerCard';
import Result from './Result';
import Culture from './Culture';

export default function Cultural() {
  return (
    <div>
      <div className="bg w-full flex gap-[40px] max-md:gap-[10px] flex-wrap justify-center align-center items-center bg-gradient-to-r from-[#161d3c] via-[#08123a] to-[#200C26] ">
        {/* <Techcard /> */}
        <Culture/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <SingerCard/>
        <SingerCard/>
        <Result/>
        
        {/* <Card/>
        <Card/>
        <Card/> */}
      </div>
    </div>
  )
}
