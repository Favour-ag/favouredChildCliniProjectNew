import fcc from '../img/fcc.jpg'
import { VscLocation } from 'react-icons/vsc'
import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';

const About = () => {
  return (
    <>
    <div className="bg-gray-100 w-full">
    <Navbar />
      <div className="container mx-auto py-8 px-1 lg:px-10 pt-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <img
              src={fcc}
              alt="Hospital Building"
              className="w-full lg:w-[800px] h-[400px] lg:h-[-500px] rounded-lg "
            />
            <p className='flex text-xl '><VscLocation className='text-3xl'/>4 Jerry Avenue New Heaven Extension Opposite
              National Orthopedic Hospital Abakaliki Road Enugu</p>
          </div>
          <div className='text-justify leading-loose p-2'>
            <p>
            At our clinic, friendly faces and warm spaces await you. From the moment you step in, we've cultivated an environment that feels like home, ensuring your family's comfort from the very first visit.
            </p>
            <p>
            Healthcare with us is an experience in playfulness. We believe in turning check-ups into moments of joy, creating positive adventures for your little ones at every visit. Because health should be synonymous with happiness.
            </p>
            <p>
            We're not just a clinic; we're your wellness partners. With accessible services, 24/7 availability, and a commitment to empowering parents with information, we aim to be your go-to resource for all things health-related.
            </p>
            <p>
            By choosing us, you become part of a community that values health and happiness. We actively engage with local initiatives, creating a network of support that extends beyond the clinic walls. Because your family's health journey deserves nothing less than Healthy Happiness
            </p>
          </div>
        </div>
      </div>
      <div className='grid justify-center gap-5 md:flex py-8'>
      <div className='w-[330px] lg:w-[500px] h-[260px] shadow-lg shadow-green-500 grid justify-items-center rounded-2xl p-4 px-10  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300'>
                {/* < FaSyringe className='text-green-500 text-5xl mt-[-16px]' /> */}
                <p className='text-3xl font-semibold pt-4'>Our Mission</p>
                <p className='text-center text-gray-500 '>We're on a mission to bring boundless joy and wellness to families. Through personalized and playful healthcare, we empower every family to lead healthier, happier lives.</p>
            </div>
      <div className='w-[330px] lg:w-[500px] h-[260px] shadow-lg shadow-green-500 grid justify-items-center rounded-2xl p-4 px-10  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300'>
                
                <p className='text-3xl font-semibold pt-4'>Our Vision</p>
                <p className='text-center text-gray-500'>Our vision is to be the heartbeat of joyful health for families, redefining the healthcare experience with vibrant, family-centered care that inspires smiles and builds healthier communities.</p>
            </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default About;
