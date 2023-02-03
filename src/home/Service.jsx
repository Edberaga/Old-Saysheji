import React from 'react'
import { service } from '../constant'
import { styles } from '../style'
import Card from '../components/Card'
import Content from '../constant/homeContent.json'

const ServiceItem = ({ icon, title}) => {
  return (
    <div className="flex justify-start items-center flex-row 
      sm:px-2 sm:py-2 rounded-[20px] md:w-[25%] max-w-[50%] feedback-card w-full">
      <img src={icon} alt={title} className='w-16 mx-3 self-center'/>
      <h1 className="font-poppins font-normal md:text-center text-left md:text-[15px] text-[14.5px] leading-[32px] text-white my-8">{title}</h1>
    </div>
  )
}

const Service = () => {
  return (
    <>
    <section id='service' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h1 className={styles.heading2}>{Content.serviceSectionTitle}</h1>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} ss:text-right text-left sm:ml-[5rem] ml-0 text-base`}>{Content.serviceSectionInfo}</p>
        </div>
      </div>

      <div className="flex flex-wrap justify-start w-full feedback-container relative z-[1]">
        {service.map((card) => (
          <ServiceItem key={card.id} {...card} />
        ))}
      </div>
    </section>
    </>
  )
}

export default Service