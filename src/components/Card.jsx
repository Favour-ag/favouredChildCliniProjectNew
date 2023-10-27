import React from 'react'
import { FaUserDoctor } from 'react-icons/fa6'
import { Ri24HoursLine } from 'react-icons/ri'
import { BiSolidFirstAid } from 'react-icons/bi'

const Card = () => {
  return (
    <>
        <div className='grid justify-center p-6 gap-6 md:flex flex-wrap lg:flex '>
            <div className='w-[380px] h-[250px] shadow-lg shadow-green-500 grid justify-items-center rounded-2xl p-5 px-10 gap-4'>
                <FaUserDoctor className='text-green-500 text-5xl' />
                <p className='text-xl font-semibold'>Qualified Doctors</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ea fugiat dolor, qui ut laudantium inventore accusamus iste architecto nesciunt?</p>
            </div>
            <div className='w-[380px] h-[250px] shadow-lg shadow-green-500 grid justify-items-center rounded-2xl p-5 px-10 gap-4'>
                < Ri24HoursLine className='text-green-500 text-5xl' />
                <p className='text-xl font-semibold'>24/7 Service</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ea fugiat dolor, qui ut laudantium inventore accusamus iste architecto nesciunt?</p>
            </div>
            <div className='w-[380px] h-[250px] shadow-lg shadow-green-500 grid justify-items-center rounded-2xl p-5 px-10 gap-4'>
                < BiSolidFirstAid className='text-green-500 text-5xl' />
                <p className='text-xl font-semibold'>Best Treatment</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ea fugiat dolor, qui ut laudantium inventore accusamus iste architecto nesciunt?</p>
            </div>
            
        </div>
    </>
  )
}

export default Card