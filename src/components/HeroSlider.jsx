import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/Images/frontdesk.jpg'
import img2 from '../assets/Images/reception.jpg'
import img3 from '../assets/Images/waitingarea.jpg'
import img4 from '../assets/Images/office.jpg'
import img5 from '../assets/Images/bedspace.jpg'
import img6 from '../assets/Images/dispensary.jpg'
import img7 from '../assets/Images/outsideview.jpg'
import img8 from '../assets/Images/playarea2.jpg'


const HeroSlider = () => {
  return (
    <>
    <div className='px-6 md:px-8 lg:px-24 grid justify-center md:flex md:justify-normal md:flex-row-reverse md:gap-9 text-center md:text-left w-full'></div>
    <div className=''>
    <Carousel>
      <Carousel.Item interval={1000}>
        <img className='object-cover h-[425px] lg:h-[500px] w-full' src={img1} alt="front desk" />
        <Carousel.Caption>
          <h3>FRONT DESK</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img className='object-cover h-[425px] lg:h-[500px] w-full' src={img2} alt="reception" />
        <Carousel.Caption>
          <h3>RECEPTION</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img className='object-cover h-[425px] lg:h-[500px] w-full' src={img3} alt="waiting area" />
        <Carousel.Caption>
          <h3>WAITING AREA</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img className='object-cover h-[425px] lg:h-[500px] w-full' src={img4} alt="office" />
        <Carousel.Caption>
          <h3>ADMIN OFFICE</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item interval={1000}>
        <img className='object-cover h-[425px] lg:h-[500px] w-full' src={img8} alt="playarea" />
        <Carousel.Caption>
          <h3>PLAY AREA</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item interval={1000}>
        <img className='object-cover h-[425px] lg:h-[500px] w-full' src={img5} alt="bedspace" />
        <Carousel.Caption>
          <h3>PEDIATRIC BEDSPACE</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img className='object-cover h-[425px] lg:h-[500px] w-full' src={img6} alt="dispensary" />
        <Carousel.Caption>
          <h3>DISPENSARY</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img className='object-cover h-[425px] lg:h-[500px] w-full' src={img7} alt="outside" />
        <Carousel.Caption>
          <h3>OUTSIDE VIEW</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
    </div>
    </>
  )
}

export default HeroSlider