import React from 'react'
import footerData from "../api/FooterData.json"
import { MdPlace } from 'react-icons/md'
import { IoCallSharp } from 'react-icons/io5'
import { TbMailPlus } from 'react-icons/tb'

function Footer() {

  const footerIcon = {
    MdPlace : <MdPlace className='size-10 text-blue-500'/>,
    IoCallSharp : <IoCallSharp className='size-10 text-blue-500'/>,
    TbMailPlus : <TbMailPlus className='size-10 text-blue-500'/>
  }

  return (
    
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pl-40 bg-[#22262b] py-4 '>
        {footerData.map((curData, index)=>{
          const {icon, title, details} = curData;
          return (
            <div className='flex gap-3 items-center' key={index}>
              <div>{footerIcon[icon]}</div>
              <div className='gap-4'>
                <p className='font-bold text-xl'>{title}</p>
                <p className='text-medium text-gray-500'>{details}</p>
              </div>
            </div>
          )
        })}
    </div>
   
  )
}

export default Footer