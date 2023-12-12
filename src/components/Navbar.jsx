import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { RxCross1 } from 'react-icons/rx'
import logo from '../components/img/logo.png'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  return (
    <nav className='z-10 fixed p-6 md:px-10 lg:px-24 xl:px-24 text-md  w-full h-[100px] bg-white/20 mt-1'>
        <div className='flex justify-between'>
            <div className='m-[-40px]'>
            <img src={logo} alt="" className='w-[140px] cursor-pointer' />
            </div>
            <div className='flex space-x-8 cursor-pointer mt-2'>
                <ul className='space-x-5 hidden md:flex mt-1 no-underline'>
                    <li className=''><a className='font-bold  active:text-white' href="/">
                        {/* <MdKeyboardDoubleArrowRight /> */}
                        Home</a></li>
                    <li><a className='font-bold active:text-white' href={"/aboutpage"}>About</a></li>
                    <li><a className='font-bold active:text-white' href={"/servicesPage"}>Services</a></li>
                    <li><a className='font-bold active:text-white' href={"/contactPage"}>Contact</a></li>
                </ul>
                <div className='hidden md:block space-x-3 cursor-pointer'>
                    {/* <button className='bg-white  rounded-lg w-[100px] py-0.5 text-green-500  outline outline-green-500 outline-1'>Sign In</button> */}
                    <button className='bg-green-400  rounded-lg w-[160px] py-2 text-white mt-[-4px]'><a href={"/bookappointment"}>Book Appointment</a></button>
                </div>
                <div className='md:hidden text-2xl flex mt-1'>
                <button className='flex' onClick={toggleMenu}>
                    {isOpen ? (
                        <div>
                            <RxCross1 className=' text-3xl font-extrabold' />
                            <div className='w-[120px] h-[150px]  grid justify-items-center  rounded-2xl bg-white absolute right-8 text-lg shadow-lg shadow-slate-500 '>
                            <ul className='mt-1 grid justify-items-start  cursor-pointer p-3 hover:cursor-pointer '>
                            <li><a href={"/"}>Home</a></li>
                            <li><a href={"/aboutpage"}>About</a></li>
                            <li><a href={"/servicesPage"}>Services</a></li>
                            <li><a href={"/contactPage"}>Contact</a></li>
                            </ul>
                            </div>
                        </div>
                    ):     <FaBars className='text-3xl text-gray-700' />
                    }
                </button>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar