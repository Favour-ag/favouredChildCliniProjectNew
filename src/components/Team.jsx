import React from 'react'
import bn from '../img/bn.jpg'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'

const Team = () => {
  return (
    <>
      <p className='text-xl grid justify-items-center font-semibold mt-10'>Our Team</p>
        <div className='grid justify-items-center sm:flex md:flex-wrap lg:flex-nowrap'>
            <div className='grid justify-items-center '>
            <div className='p-6 grid justify-items-center '>
              <img src={bn} alt="" className='w-[400px] h-[290px] rounded-t-3xl'/>
              <div className='grid justify-items-center bg-white  shadow-sm shadow-slate-300 rounded-b-xl w-[400px] p-3 relative top-[-10px] gap-1'>
              <p className='text-xl font-semibold'>Doctor Chima</p>
              <p>Doctor</p>
              <div className='flex gap-3 '>
                <span><BsInstagram /></span>
                <span><BsFacebook /></span>
                <span><BsTwitter /></span>
                </div>
              </div>
            </div> 
            </div>
            <div className='grid justify-items-center '>
            <div className='p-6 grid justify-items-center '>
              <img src={bn} alt="" className='w-[400px] h-[290px] rounded-t-3xl'/>
              <div className='grid justify-items-center bg-white  shadow-sm shadow-slate-300 rounded-b-xl w-[400px] p-3 relative top-[-10px] gap-1'>
              <p className='text-xl font-semibold'>Doctor Chima</p>
              <p>Doctor</p>
              <div className='flex gap-3 '>
                <span><BsInstagram /></span>
                <span><BsFacebook /></span>
                <span><BsTwitter /></span>
                </div>
              </div>
            </div> 
            </div>
            <div className='grid justify-items-center' >
            <div className='p-6 grid justify-items-center '>
              <img src={bn} alt="" className='w-[400px] h-[290px] rounded-t-3xl'/>
              <div className='grid justify-items-center bg-white  shadow-sm shadow-slate-300 rounded-b-xl w-[400px] p-3 relative top-[-10px] gap-1'>
              <p className='text-xl font-semibold'>Doctor Chima</p>
              <p>Doctor</p>
              <div className='flex gap-3 '>
                <span><BsInstagram /></span>
                <span><BsFacebook /></span>
                <span><BsTwitter /></span>
                </div>
              </div>
            </div> 
            </div>
        </div>
    </>
  )
}

export default Team