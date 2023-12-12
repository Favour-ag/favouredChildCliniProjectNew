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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <img
              src={fcc}
              alt="Hospital Building"
              className="w-full lg:w-[800px] h-[400px] lg:h-[-500px] rounded-lg "
            />
            <p className='flex text-xl '><VscLocation className='text-3xl'/>4 Jerry Avenue New Heaven Extension Opposite
              National Orthopedic Hospital Abakaliki Road Enugu</p>
          </div>
          <div className='text-md text-center md:text-left'>
            <h2 className="text-3xl font-semibold mb-2">Our Mission</h2>
          <p>
            Our mission at FavouredChild Clinic is to provide compassionate and specialized healthcare for children, ensuring their well-being and happiness. We are committed to offering personalized care and fostering a warm and welcoming environment for our young patients.
          </p>
          <h2 className="text-3xl font-semibold mb-2 ">Get Involved</h2>
          <p>
            You can be a part of our mission to promote children's health and happiness. Whether you're interested in volunteering, supporting our initiatives, or participating in community events, there are many ways to get involved and make a positive impact on children's lives.
          </p>
            <p>
              At our hospital, we prioritize patient comfort and safety.
              Whether you're here for a routine check-up or a major surgery,
              you can trust us to take care of you.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default About;
