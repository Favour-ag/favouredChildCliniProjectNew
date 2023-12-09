import React from 'react'
import { FaUserDoctor } from 'react-icons/fa6'
import { Ri24HoursLine } from 'react-icons/ri'
import { BiSolidFirstAid } from 'react-icons/bi'

const Card = () => {
  return (
    <>
        <div className='grid justify-center p-6 gap-6 md:flex flex-wrap lg:flex '>
            <div className='w-[330px] lg:w-[400px] h-[260px]  shadow-lg shadow-green-500 grid justify-items-center rounded-2xl p-5 px-10 gap-1'>
                <FaUserDoctor className='text-green-500 text-5xl mt-[-14px]' />
                <p className='text-xl font-semibold'>Qualified Doctors</p>
                <p className='text-center text-gray-500'>Our team of highly qualified and experienced pediatricians is committed to delivering top-notch healthcare for your child.</p>
            </div>
            <div className='w-[330px] lg:w-[400px] h-[260px] shadow-lg shadow-green-500 grid justify-items-center rounded-2xl p-5 px-10 gap-1'>
                < Ri24HoursLine className='text-green-500 text-5xl mt-[-16px]' />
                <p className='text-xl font-semibold'>24/7 Service</p>
                <p className='text-center text-gray-500'>Health concerns don't always follow a schedule. That's why our clinic offers round-the-clock services to address your child's health needs.</p>
            </div>
            <div className='w-[330px] lg:w-[400px] h-[260px] shadow-lg shadow-green-500 grid justify-items-center rounded-2xl p-5 px-10 gap-1'>
                < BiSolidFirstAid className='text-green-500 text-5xl mt-[-14px]' />
                <p className='text-xl font-semibold'>Best Treatment</p>
                <p className='text-center text-gray-500'>We believe in delivering the best possible treatment for your child's health conditions.</p>
            </div>
        </div>
    </>
  )
}

export default Card