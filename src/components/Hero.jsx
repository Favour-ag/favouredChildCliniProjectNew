import React from 'react'
// import doc from '../img/doc.png'
// import banddoc from '../components/img/banddoc.jpg'
import hlf from '../components/img/hlf.jpg'

const Hero = () => {
  return (
    <>
        <div className='px-6 md:px-8 lg:px-24 grid justify-center md:flex md:justify-normal md:flex-row-reverse md:gap-9 text-center md:text-left'>
        <div className='flex justify-center'>
        {/* <div className='w-[370px] h-[350px] bg-green-500 rounded-full mt-8 sm:w-[450px] sm:h-[450px]'>
        <div className='absolute z-10 top-60 right-80 sm:right-96 md:right-80'>
                <div className='w-[130px] h-[80px]  grid justify-items-center rounded-2xl bg-white  text-lg shadow-lg shadow-slate-500 py-3 font-semibold'>
                    <p>300+</p>
                    <p>Clients</p>
                </div>
            </div>
        </div> */}
            {/* <img src={banddoc} alt="Hero Image" className='w-[500px] md:w-[1300px] lg:w-[1500px]' /> */}
            <img src={hlf} alt="" className='w-[500px] md:w-[1300px] lg:w-[1500px]' />
            {/* <img src={banddoc} alt="Hero Image" className='absolute h-[450px] w-[330px] top-14 sm:top-8 sm:w-[430px] sm:h-[570px] md:w-[400px] md:h-[560px]' /> */}
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