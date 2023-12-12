import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { VscLocation } from 'react-icons/vsc'
import { AiOutlineMail } from 'react-icons/ai'
import { IoCallOutline } from 'react-icons/io5'
import { BsChatDotsFill } from 'react-icons/bs'
import logo from '../components/img/logo.png'

const Footer = () => {
  return (
    <>
        <div className='bg-green-900  space-y-7 md:space-y-0 text-white text-lg md:flex  overflow-hidden grid sm:grid-cols-2 lg:px-28'>
            <div className=' grid justify-items-start px-5 pt-5 md:justify-items-start cursor-pointer gap-1'>
            <div className='m-[-76px] '>
            <a href="/">
            <img src={logo} alt="" className='w-[300px] cursor-pointer' />
            </a>
            </div>
                <p className='hover:text-zinc-300 font-semibold'>Follow Us:</p>
                <div className='flex gap-3'>
                <span className='hover:text-zinc-300'><BsInstagram /></span>
                <span className='hover:text-zinc-300'><BsFacebook /></span>
                <span className='hover:text-zinc-300'><BsTwitter /></span>
                </div>
            </div>
             <div className='px-5 sm:py-5  sm:space-y-2 lg:pt-8'>
                <h1 className='text-xl font-semibold'>Links</h1>
                <p><a href={"/"} className='hover:text-zinc-300 hover:text-xl'>Home</a></p>
                <p><a href={"/aboutpage"} className='hover:text-zinc-300 hover:text-xl'>About</a></p>
                <p><a href={"/services"} className='hover:text-zinc-300 hover:text-xl'>Services</a></p>
                <p><a href={"/contactpage"} className='hover:text-zinc-300 hover:text-xl'>Contact</a></p>
            </div>
             <div className='px-5 lg:mx-4  sm:space-y-2 lg:pt-7'>
                <h1 className='text-xl font-semibold'>Others</h1>
                <p><a href={"/aboutpage"} className='hover:text-zinc-300 hover:text-xl'>Why Us</a></p>
                <p><a href={"/services"} className='hover:text-zinc-300 hover:text-xl'>Pricing Plan</a></p>
                <p><a href={"/contactpage"} className='hover:text-zinc-300 hover:text-xl'>News and Articles</a></p>
            </div>
            
            
            <div className='px-5 sm:p-0 lg:pt-8 lg:space-y-2 '>
                <h1 className='text-xl mb-1 md:mx-auto font-semibold'>Official Info</h1>
                <div className=''>
                    <div className='flex gap-3'>
                    <div>
                    <VscLocation className='text-4xl md:text-3xl flex flex-wrap'/>
                    </div>
                    <p>4 Jerry Avenue New Heaven Extension  Opposite National  Orthopedic Hospital Abakaliki Road Enugu</p>
                    </div>
                    <div className='flex gap-3 '>
                    <AiOutlineMail className='text-3xl'/>
                    <p>company@gmail.com</p>
                    </div>
                    <div className='flex gap-3 pb-3'>
                    <IoCallOutline className='text-3xl'/>
                    <p>+234 XXX XXX XXX</p>
                    </div>
                </div>
                
                <div className='fixed bottom-10 right-4'>
                    <a href={"/contact"}><BsChatDotsFill className='text-6xl text-gray-400' /></a>
                </div>
                </div>
        </div>
    </>
  )
}

export default Footer