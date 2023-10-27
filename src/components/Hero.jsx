import React from 'react'

import hlf from '../components/img/hlf.jpg'

const Hero = () => {
  return (
    <>
        <div className='px-6 md:px-8 lg:px-24 grid justify-center md:flex md:justify-normal md:flex-row-reverse md:gap-9 text-center md:text-left'>
        <div className='flex justify-center'>
            <img src={hlf} alt="" className='w-[500px] md:w-[1300px] lg:w-[1500px]' />
        </div>
        <div className='md:justify-items-start mt-3 md:mt-0 gap-2 hidden md:flex justify-center flex-col'>
            <p className='text-5xl md:mt-16 lg:mt-0 '>Your Child's Health,</p>
            <p className='text-5xl font-bold '>Our Priority</p>
            <p className='mt-2 sm:mx-14 md:mx-0 md:mt-0'>At Favoured Clinic, we are dedicated to your child's health and well-being. Our experienced and caring medical professionals are here to provide you with the highest quality healthcare services. Your health is our priority.
            </p>
            <button className='bg-green-500 rounded-md p-2.5 mt-3 w-[160px] text-white text-lg'><a href="./contactpage">Get Started</a></button>
        </div>
        <div className='grid justify-items-center md:justify-items-start mt-3 md:mt-0 gap-2 md:hidden'>
            <p className='text-5xl md:mt-16 lg:mt-0'>Your Child's Health,</p>
            <p className='text-5xl font-bold'>Our Priority</p>
            <p className='mt-2 sm:mx-14 md:mx-0 md:mt-0'>At Favoured Clinic, we are dedicated to your health and well-being. Our experienced and caring medical professionals are here to provide you with the highest quality healthcare services. Your health is our priority.
            </p>
            <button className='bg-green-500 rounded-md p-2.5 mt-3 w-[160px] text-white text-lg'>Get Started</button>
        </div>
        </div>
    </>
  )
}

export default Hero