import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { VscLocation } from 'react-icons/vsc'
import { AiOutlineMail } from 'react-icons/ai'
import { IoCallOutline } from 'react-icons/io5'
import { BsChatDotsFill } from 'react-icons/bs'

const Footer = () => {
  return (
    <>
        <div className='bg-green-900 text-white text-lg sm:grid sm:grid-cols-2 md:flex md:gap-5 lg:px-12 lg:py-5 overflow-hidden text center'>
            <div className='grid justify-items-center p-5 md:justify-items-start cursor-pointer'>
                <h1 className='text-xl mb-2 hover:text-zinc-300'>FavouredChild</h1>
                <p className='hover:text-zinc-300'>Your Child's Health, Our Priority</p>
                <p className='hover:text-zinc-300'>favourchild@support</p>
                <p className='hover:text-zinc-300'>Follow Us:</p>
                <div className='flex gap-3'>
                <span className='hover:text-zinc-300'><BsInstagram /></span>
                <span className='hover:text-zinc-300'><BsFacebook /></span>
                <span className='hover:text-zinc-300'><BsTwitter /></span>
                </div>
            </div>
            <div className='grid justify-items-center p-5 md:justify-items-start cursor-pointer'>
                <h1 className='text-xl mb-2 hover:text-zinc-300'>Company</h1>
                <p><a href={"/"} className='hover:text-zinc-300'>Home</a></p>
                <p><a href={"/about"} className='hover:text-zinc-300'>About</a></p>
                <p><a href={"/services"} className='hover:text-zinc-300'>Services</a></p>
                <p><a href={"/contactpage"} className='hover:text-zinc-300'>Contact</a></p>
            </div>
            <div className='grid justify-items-center md:justify-items-start cursor-pointer md:mt-6'>
                <h1 className='text-xl mb-2 hover:text-zinc-300'>Important</h1>
                <p><a href={"/about"} className='hover:text-zinc-300'>Our Process</a></p>
                <p><a href={"/contactpage"} className='hover:text-zinc-300'>Appointment</a></p>
                <p className='hover:text-zinc-300'>Privacy Policy</p>
                <p className='hover:text-zinc-300'>Terms and Conditions</p>
            </div>
            <div className='grid justify-items-center p-5 md:justify-items-start cursor-pointer '>
                <h1 className='text-xl mb-2 '>Quick Link</h1>
                <p><a href={"/about"} className='hover:text-zinc-300'>Why Us</a></p>
                <p className='hover:text-zinc-300'>Pricing Plan</p>
                <p className='hover:text-zinc-300'>News and Articles</p>
                
            </div>
            <div className='grid justify-items-center md:justify-items-start cursor-pointer p-5 sm:grid sm:ml-20 sm:mt-4'>
                <h1 className='text-xl mb-1 md:mx-auto'>Official Info</h1>
                <div className='grid justify-items-center gap-1.5 mb-28'>
                <p className='flex'><span><VscLocation className='text-3xl'/></span>4 Jerry Avenue New Heaven Extension Opposite National  Orthopedic Hospital Abakaliki Road Enugu</p>
                <p className='flex'><span><AiOutlineMail className='text-3xl'/></span>company@gmail.com</p>
                <p className='flex'><span><IoCallOutline className='text-3xl'/></span>+234 XXX XXX XXX</p>
                </div>
                <div className='sticky ml-96'>
                    <a href={"/contact"}><BsChatDotsFill className='text-5xl' /></a>
            </div>
            </div>
            
        </div>
    </>
  )
}

export default Footer