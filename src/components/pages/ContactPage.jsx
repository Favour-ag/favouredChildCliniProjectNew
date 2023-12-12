import { AiOutlineArrowLeft } from 'react-icons/ai'

import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';

const ContactPage = () => {
  return (
    <>
    <div className="bg-gray-100">
     <div className='absolute top-3'>
     <Navbar />
     </div>
      <div className="container mx-auto py-8 px-1 lg:px-12 pt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div className=''>
            <h2 className="text-3xl font-semibold mb-2 text-center md:text-left">Contact Information</h2>
            <p className='text-xl text-center md:text-left'>4 Jerry Avenue New Heaven Extension Opposite </p>
            <p className='text-xl'>National Orthopedic Hospital Abakaliki Road Enugu</p>
            
            <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3964.4665969037774!2d7.525184!3d6.462418!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMjcnNDQuNyJOIDfCsDMxJzMwLjciRQ!5e0!3m2!1sen!2sus!4v1698270927562!5m2!1sen!2sus" width="370" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='w-full h-80'></iframe>
          </div>
          <div>
            <h2 className="text-3xl md:mb-4 font-semibold mb-2">Get in touch with us</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full p-2 border rounded"
                ></textarea>
              </div>
              <button
                type="submit" 
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default ContactPage;
