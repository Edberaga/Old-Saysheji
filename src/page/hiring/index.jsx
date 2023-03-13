import React from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../../style'
import { careerData } from './careerData'
import {BsArrowRightShort} from 'react-icons/bs'
import Header from './Header'
import './index.css'

const CareerCard = ({ title, img, category, link, content}) => {
  return (
    <div className="flex justify-start flex-col items-center sm:px-16 sm:py-16 px-4 py-8
    md:max-w-[350px] ss:max-w-[40%] max-w-[600px] career-card">
        <img src={img} alt={title} className='w-[100px] '/>
        <h1 className="font-poppins font-semibold  text-[18px] leading-[32px] text-black my-2">{title}</h1>
        <p className="font-poppins font-bold career-tag text-[11px] leading=[23px] text-white">{category}</p>
        <p className={`${styles.paragraph} mb-2 font-poppins text-sm text-black`}>{content}</p>
      
        <button className='mt-auto font-semibold career-apply-btn text-[15px] pt-4'>
          <Link to={link}>Apply Now  </Link>
        </button>
    </div>
  )
}

const Hiring = () => {
  return (
  <>
    <section className='w-full flex flex-col items-center'>
    <Header/>
      <section className="flex flex-wrap justify-center feedback-container relative z-[1] mb-20">
          {careerData.map((item, index) => {
          return (
            <CareerCard key={index} {...item} />
            )}
          )}
      </section>
    </section>

  </>
  )
}

export default Hiring