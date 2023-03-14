import React from 'react'
import { styles } from '../style'
import Content from '../constant/homeContent.json'
import offerImg from '../assets/img/join-us.svg'
import Discuss from './Discuss'
import { career, service } from '../constant'
import { Link } from 'react-router-dom'

const Offer = () => {
  return (
    <section className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <div className='md:m-0 m-auto md:pr-5 pr-0'>
            <h1 className={styles.heading2}>{Content.careerTitle}</h1>
            <p className={`${styles.paragraph} text-base`}>{Content.careerInfo}</p>

            <div className="flex md:justify-start justify-center items-center flex-row flex-wrap my-2">
            {career.map((card, index) => {
              return (
                <>
                <Link to={card.link}>
                    <div key={index} className="flex items-center m-2 px-2 rounded-[20px] 
                    w-[360px] feedback-card">
                      <img src={card.icon} alt={card.title} className='w-16 md:mx-3 mx-1 self-center'/>
                      <h1 className="font-poppins font-normal md:text-center text-left w-full px-2
                        md:text-[15px] text-[13.5px] leading-[32px] text-white my-8">{card.title}</h1>
                    </div>
                </Link>
                </>
              )
            })}
            </div>

            <div className='text-center'>
                <Discuss styles="mt-10" detail={'Read More'} link='/career'/>
            </div>
        </div>

        <div className="md:block hidden md:mt-0 mt-6">
            <img src={offerImg} alt="" className='md:w-full w-[50%] m-auto'/>
        </div>
    </section>
    
  )
}

export default Offer