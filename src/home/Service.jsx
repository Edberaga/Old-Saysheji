import React from 'react'
import { service } from '../constant'
import { styles } from '../style'
import Content from '../constant/homeContent.json'

const ServiceItem = ({ icon, title}) => {
  return (
    <div className="flex justify-start items-center flex-row
      px-2 sm:py-2 rounded-[20px] md:w-[25%] w-[50%] min-w-[200px] feedback-card">
      <img src={icon} alt={title} className='w-16 md:mx-3 mx-1 self-center'/>
      <h1 className="font-poppins font-normal md:text-center text-left w-full px-2
      md:text-[15px] text-[13.5px] leading-[32px] text-white my-8">{title}</h1>
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

      <div className="flex flex-wrap zs:justify-start justify-center feedback-container w-full relative z-[1]">
        {service.map((card) => (
          <ServiceItem key={card.id} {...card} />
        ))}
      </div>
    </section>
    </>
  )
}

export default Service