import React from 'react';
import { RiFirstAidKitFill } from "react-icons/ri";
import { FaSyringe } from "react-icons/fa6";
import { BiHealth } from "react-icons/bi";
import { RiParentFill } from "react-icons/ri";
import { FaChild } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";

function App() {
  return (
    <div className=" min-h-screen  lg:pt-16">
      <div className=" px-4 lg:px-32 rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold mb-4 grid justify-items-center">Our Services</h1>
        {/* <p className="mb-6 text-slate-500 text-center md:text-left">
          At FavouredChild Clinic, we are dedicated to providing the highest quality healthcare for children. Our team of experienced and caring professionals offers a range of specialized services to ensure your child's well-being. Explore the services we offer below:
        </p> */}

       
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
         
          <div className="p-4 rounded-lg border border-gray-300">
            <h2 className="text-xl font-semibold mb-2">1. Pediatric Checkups</h2>
            <p className="text-gray-600 mb-4">Regular checkups are essential for monitoring your child's growth and development.</p>
            <ul className="list-disc list-inside">
              <li>Routine well-child visits</li>
              <li>Immunizations</li>
              <li>Growth tracking</li>
              <li>Developmental screenings</li>
            </ul>
          </div>

       
          <div className="p-4 rounded-lg border border-gray-300">
            <h2 className="text-xl font-semibold mb-2">2. Vaccinations</h2>
            <p className="text-gray-600 mb-4">Keeping your child up to date on vaccinations is crucial for safeguarding their health.</p>
            <ul className="list-disc list-inside">
              <li>Childhood vaccinations</li>
              <li>Flu shots</li>
              <li>Travel vaccinations</li>
              <li>Vaccine counseling</li>
            </ul>
          </div>

          
          <div className="p-4 rounded-lg border border-gray-300">
            <h2 className="text-xl font-semibold mb-2">3. Pediatric Specialists</h2>
            <p className="text-gray-600 mb-4">Our team includes pediatric specialists who are experts in various areas of child healthcare.</p>
            <ul className="list-disc list-inside">
              <li>Pediatric cardiology</li>
              <li>Pediatric dermatology</li>
              <li>Pediatric neurology</li>
              <li>Pediatric pulmonology</li>
              <li>Pediatric gastroenterology</li>
            </ul>
          </div>
        </div> */}
         <div className='grid justify-center p-6 gap-6 md:flex flex-wrap lg:flex '>
            <div className='w-[330px] lg:w-[400px] h-[260px]  shadow-lg shadow-green-500 grid justify-items-center rounded-2xl p-5 px-10 gap-1'>
                <RiFirstAidKitFill className='text-green-500 text-5xl mt-[-14px]' />
                <p className='text-xl font-semibold'>Pediatric Check-ups</p>
                <p className='text-center text-gray-500'>Regular check-ups tailored to your child's age and developmental stage, ensuring they grow up healthy and happy.</p>
            </div>
            <div className='w-[330px] lg:w-[400px] h-[260px] shadow-lg shadow-green-500 grid justify-items-center rounded-2xl p-5 px-10 gap-1'>
                < FaSyringe className='text-green-500 text-5xl mt-[-16px]' />
                <p className='text-xl font-semibold'>Immunizations and Vaccinations</p>
                <p className='text-center text-gray-500'>Providing a shield of protection through timely and essential vaccinations to keep your child safe from preventable diseases.</p>
            </div>
            <div className='w-[330px] lg:w-[400px] h-[260px] shadow-lg shadow-green-500 grid justify-items-center rounded-2xl p-5 px-10 gap-1'>
                < BiHealth className='text-green-500 text-5xl mt-[-14px]' />
                <p className='text-xl font-semibold'>Specialized Pediatric Care</p>
                <p className='text-center text-gray-500'>Expert care for specific childhood conditions, delivered with a blend of compassion and medical expertise</p>
            </div>
            <div className='w-[330px] lg:w-[400px] h-[260px]  shadow-lg shadow-green-500 grid justify-items-center rounded-2xl p-5 px-10 gap-1'>
                <RiParentFill className='text-green-500 text-5xl mt-[-14px]' />
                <p className='text-xl font-semibold'>Parental Guidance and Support</p>
                <p className='text-center text-gray-500'>Empowering parents with information and support, because we believe that informed parents are confident parents.</p>
            </div>
            <div className='w-[330px] lg:w-[400px] h-[260px] shadow-lg shadow-green-500 grid justify-items-center rounded-2xl p-5 px-10 gap-1'>
                < FaChild className='text-green-500 text-5xl mt-[-16px]' />
                <p className='text-xl font-semibold'>Child-Friendly Atmosphere</p>
                <p className='text-center text-gray-500'>A welcoming environment designed to make healthcare a positive and enjoyable experience for your little one.</p>
            </div>
            <div className='w-[330px] lg:w-[400px] h-[260px] shadow-lg shadow-green-500 grid justify-items-center rounded-2xl p-5 px-10 gap-1'>
                < FaHandshake className='text-green-500 text-5xl mt-[-14px]' />
                <p className='text-xl font-semibold'>Community Outreach Programs</p>
                <p className='text-center text-gray-500'>Engaging with the community through educational programs and outreach initiatives to promote overall child health.</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
