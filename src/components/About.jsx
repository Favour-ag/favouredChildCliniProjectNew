import React from 'react'
import mandw from '../components/img/mandw.jpg'
import { FaHandsHoldingChild } from 'react-icons/fa6'
import { AiFillSafetyCertificate } from 'react-icons/ai'
import { TbShieldSearch } from 'react-icons/tb'
import { FaUserNurse } from 'react-icons/fa'

const About = () => {
  return (
    <>
        <div className='grid justify-items-center md:flex md:px-6 lg:px-32 md:gap-10 lg:gap-32 mt-10 text-center md:text-left'>
            <img src={mandw} alt="doctors"  className='w-[400px] h-[580px] md:h-[600px] rounded-xl'/>
                <div className='grid justify-items-start p-6 gap-1 lg:gap-0'>
                <h1 className='text-4xl font-semibold'>What we do</h1>
                <p className='text-slate-500 text-justify'>At FavouredChild Clinic, we're dedicated to one remarkable mission: Nurturing Every Child's Potential. Founded on the principles of compassion, expertise, and community engagement,Favoured Child Clinic was born from a shared vision – to redefine pediatric healthcare as a holistic and enriching experience. Our journey began with a commitment to treat each child not just as a patient but as a unique individual, and each family not just as clients but as integral members of our extended family.</p>
                <p className=' text-slate-500 text-justify'>Our journey began with a simple, yet profound belief – that every child is a bundle of limitless potential, deserving the finest care. We've made it our life's work to transform this belief into a reality.</p>
                <p className='text-justify text-slate-500'>
                Our team is more than a group of medical professionals; we are a family of healers united by a common purpose – the well-being of your child. Every member of our team brings not only extensive medical knowledge and skills but also a genuine passion for creating a nurturing and supportive environment. We believe that healing extends beyond prescriptions and procedures. Step into our clinic, and you'll discover a space designed to spark curiosity and imagination.
                </p>
                {/* <p className='text-justify text-slate-500'>
                In the heartbeat of FavouredChild Clinic, your child is not just a patient; they are our priority. We are dedicated to providing personalized, compassionate care that extends beyond medical treatment. Your trust is a precious gift, and we honor it by delivering healthcare that fosters trust, security, and the holistic well-being of your child.
                </p> */}
                 <button className='bg-green-400  rounded-lg w-[160px] py-2 text-white mt-2'><a href={"/aboutPage"}>Read More...</a></button>

                {/* <div className='grid gap-5 md:flex md:flex-wrap'>
                    <div className='w-[250px] h-[200px] shadow-lg shadow-slate-400 grid justify-items-center rounded-2xl p-4'>
                      <FaHandsHoldingChild  className='text-5xl text-green-400 ' />
                      <p className='text-lg font-semibold'>Child-Centered Excellence</p>
                      <p className=''>Our commitment revolves around the health, happiness, and wellbeing of children </p>
                    </div>
                    <div className='w-[250px] h-[200px] shadow-lg shadow-slate-400 grid justify-items-center rounded-2xl p-4'>
                      <AiFillSafetyCertificate className='text-5xl text-green-400' />
                      <p className='text-lg font-semibold'>Safety First</p>
                      <p className=''>We follow stringent safety and hygiene protocols to ensure your child's health is never compromised </p>
                    </div>
                    <div className='w-[250px] h-[200px] shadow-lg shadow-slate-400 grid justify-items-center rounded-2xl p-4'>
                      <TbShieldSearch className='text-5xl text-green-400' />
                      <p className='text-lg font-semibold'>Safety First</p>
                      <p className=''>We follow stringent safety and hygiene protocols to ensure your child's health is never compromised </p>
                    </div>
                    <div className='w-[250px] h-[200px] shadow-lg shadow-slate-400 grid justify-items-center rounded-2xl p-4'>
                      <FaUserNurse className='text-5xl text-green-400' />
                      <p className='text-lg font-semibold'>Experienced Pediatricians</p>
                      <p className=''>Our team of highly qualified and experienced pediatricians is dedicated to providing the best care for your child</p>
                    </div>
                  </div> */}
                </div>
            </div>
    </>
  )
}

export default About