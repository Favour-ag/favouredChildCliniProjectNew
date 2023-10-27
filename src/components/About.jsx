import React from 'react'
import mandw from '../components/img/mandw.jpg'
import { FaHandsHoldingChild } from 'react-icons/fa6'
import { AiFillSafetyCertificate } from 'react-icons/ai'
import { TbShieldSearch } from 'react-icons/tb'
import { FaUserNurse } from 'react-icons/fa'

const About = () => {
  return (
    <>
        <div className='grid justify-items-center md:flex md:px-6 lg:px-32 md:gap-10 lg:gap-6 mt-10'>
            <img src={mandw} alt="doctors"  className='w-[400px] h-[580px] md:h-[600px] rounded-xl'/>
                <div className='grid justify-items-center p-6'>
                <h1 className='text-xl font-semibold'>About Us</h1>
                <p>At FavouredChild Clinic, we're dedicated to one remarkable mission: Nurturing Every Child's Potential.</p>
                <p className='mb-4'>Our journey began with a simple, yet profound belief – that every child is a bundle of limitless potential, deserving the finest care. We've made it our life's work to transform this belief into a reality.</p>
                <div className='grid gap-5 md:flex md:flex-wrap'>
                    <div className='w-[250px] h-[200px] shadow-lg shadow-slate-400 grid justify-items-center rounded-2xl p-4'>
                      <FaHandsHoldingChild className='text-5xl' />
                      <p className='text-lg font-semibold'>Child-Centered Excellence</p>
                      <p className=''>Our commitment revolves around the health, happiness, and wellbeing of children </p>
                    </div>
                    <div className='w-[250px] h-[200px] shadow-lg shadow-slate-400 grid justify-items-center rounded-2xl p-4'>
                      <AiFillSafetyCertificate className='text-5xl' />
                      <p className='text-lg font-semibold'>Safety First</p>
                      <p className=''>We follow stringent safety and hygiene protocols to ensure your child's health is never compromised </p>
                    </div>
                    <div className='w-[250px] h-[200px] shadow-lg shadow-slate-400 grid justify-items-center rounded-2xl p-4'>
                      <TbShieldSearch className='text-5xl' />
                      <p className='text-lg font-semibold'>Safety First</p>
                      <p className=''>We follow stringent safety and hygiene protocols to ensure your child's health is never compromised </p>
                    </div>
                    <div className='w-[250px] h-[200px] shadow-lg shadow-slate-400 grid justify-items-center rounded-2xl p-4'>
                      <FaUserNurse className='text-5xl' />
                      <p className='text-lg font-semibold'>Experienced Pediatricians</p>
                      <p className=''>Our team of highly qualified and experienced pediatricians is dedicated to providing the best care for your child</p>
                    </div>
                  </div>
                </div>
            </div>
    </>
  )
}

export default About