'use client'
import React, { useState } from 'react';
import Table from "../Table/table"
import Cards from "../Card/cards"
import LineChart from "../Chart/line"
import BarChart from "../Chart/bar"
import PiChart from "../Chart/pi"


export default function AdminComponant(){
  return (
    <div>
      <div >
      <Cards></Cards>
      </div>
      
      
        <div>
          <LineChart></LineChart>
        </div>
        <div className="flex w-[60vw]"> 
          <div className="flex w-[20vw]">
            <BarChart></BarChart>
          </div>
          <div className="flex w-[20vw]">
            <PiChart></PiChart>
          </div>
        </div>
      </div>
    
  );
}


