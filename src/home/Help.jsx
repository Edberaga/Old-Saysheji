import React from 'react'
import { styles, layout } from '../style'
import Content from '../constant/homeContent.json'
import { help } from '../constant'
import KnowMore from './KnowMore'

const HelpList = ({ title, icon, info, index}) => {
  return (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== help.length -1 ? "mb-3" :" mb-0" } feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      {/*<img src={icon} alt={title} className='w-[50%] h-[50%] object-contain'/>*/}
    </div>
    <div className='flex-1 flex flex-col ml-3'>
      <h4 className="font-poppins font-semibold text-[18px] leading-[23px] text-white mb-1">{title}</h4>
      <p className={`${styles.paragraph} font-poppins text-sm text-white text-[16px] leading-[24px] mb-1`}>{info}</p>
    </div>
  </div>
  )
}

const Help = () => {
  return (
    <section id='help' className='my-20 '>
      <h1 className={styles.heading2}>{Content.helpSectionTitle}</h1>
      <div className="w-full flex justify-between items-start md:flex-row flex-col sm:mb-0 mb-6 relative z-[1]">
        <div className="w-full md:mt-10 mt-6">
          <p className={`${styles.paragraph} sm:mr-[5rem] mr-5 text-base`}>{Content.helpSectionInfo}</p>
        </div>
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {help.map((item, index) => (
          <HelpList key={item.id} {...item} index={index}/>
        ))}
      </div>

      <div className="w-full flex justify-center">
        <KnowMore styles='mt-10' detail="Let's Discuss"/>
      </div>
    </section>
  )
}

export default Help