import React from 'react'
import { styles } from '../style'

const Card = ({ content, title, icon}) => {
  return (
    <div className="flex justify-start flex-col 
    sm:px-10 sm:py-12 px-4 py-6 rounded-[20px] md:max-w-[30%] ss:max-w-[40%] max-w-[600px] md:mr-10 sm:mr-5 
    mr-0 sm:my-5 my-2 feedback-card w-full">
      <img src={icon} alt={title} className='w-16 self-center'/>
      <h1 className="font-poppins font-normal text-center text-[18px] leading-[32px] text-white my-8">{title}</h1>
      <p className={`${styles.paragraph} font-poppins text-sm text-white`}>{content}</p>
    </div>
  )
}

export default Card