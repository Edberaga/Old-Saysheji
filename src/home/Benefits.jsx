import React from 'react'
import { benefits } from '../constant'
import { styles } from '../style'
import Content from '../constant/homeContent.json'
import KnowMore from './KnowMore'

const BenefitsList = ({ title, number, info}) => {
  return (
    <div className="flex justify-start flex-col 
    sm:px-10 px-3 py-6 rounded-[20px] sm:max-w-[400px] max-w-[600px] md:mr-10 sm:mr-5 
    mr-0 sm:my-5 my-2">
      <h1 className="font-poppins font-normal text-center text-[18px] leading-[32px] text-white my-8">{title}</h1>
      <h1 className="font-poppins font-semibold ss:text-[72px] text-[50px] text-center
          ss:leading-[100px] leading-[65px] text-gradient">{number}</h1>
      <p className={`${styles.paragraph} font-poppins text-sm text-white`}>{info}</p>
      <KnowMore style='mt-10' detail={'Learn More'}/>
    </div>
  )
}

const Benefits = () => {
  return (
    <section id="benefit" className='my-20 '>
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h1 className={styles.heading2}>{Content.benefitSectionTitle}</h1>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} ss:text-right text-left sm:ml-[5rem] ml-0 text-base`}>{Content.benefitSectionInfo}</p>
        </div>
      </div>

      <div className="flex flex-wrap justify-start justify-center w-full feedback-container relative z-[1]">
        {benefits.map((card) => (
          <BenefitsList key={card.id} {...card} />
        ))}
      </div>
    </section>
  )
}

export default Benefits