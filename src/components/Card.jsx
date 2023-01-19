import React from 'react'
import { styles } from '../style'

const Card = ({ content, title, icon}) => {
  return (
    <div className="flex justify-start flex-col 
    px-10 py-12 rounded-[20px] sm:max-w-[400px] max-w-[600px] md:mr-10 sm:mr-5 
    mr-0 my-5 feedback-card w-full">
      <img src={icon} alt={title} className='w-16 self-center'/>
      <h1 className="font-poppins font-normal text-center text-[18px] leading-[32px] text-white my-8">{title}</h1>
      <p className={`${styles.paragraph} font-poppins text-sm text-white`}>{content}</p>
    </div>
  )
}

export default Card