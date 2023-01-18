import React from 'react'
import { styles } from '../style'
import { FiArrowUpRight } from 'react-icons/fi'

const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} ss:w-[140px] w-[120px] ss:h-[140px] h-[120px] 
    rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
        <div className={`${styles.flexCenter} flex-col bg-primary 
        w-[100%] h-[100%] rounded-full`}>
            <div className={`${styles.flexStart} flex-row`}>
                <p className='font-poppins font-medium text-[16px] leading-[23px]'>
                    <span className='text-gradient'>Get</span>
                </p>
                <span className='ss:px-2 px-0 ss:text-lg text-lg'><FiArrowUpRight/></span>
            </div>
            <p className="font-poppins font-medium text-[16px] leading-[23px]">
                <span className="text-gradient">Started</span>
            </p>
        </div>
    </div>
  )
}

export default GetStarted