import React from 'react'
import { styles } from '../style'
import Content from '../constant/homeContent.json'
import GetStarted from "./GetStarted";

const Hero = () =>(
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className='font-poppins font-semibold ss:text-[72px] text-[50px] 
          ss:leading-[100px] leading-[65px]'> 
          The Next <span className='text-gradient'>Web3</span>
          </h1>
          
          <div className="ss:flex block md:mr-4 mr-0">
            <br className={`ss:flex-nowrap flex-wrap`}/>
            <GetStarted/>
          </div>
        </div>
        <h1 className='font-poppins font-semibold ss:text-[68px] text-[46px] ss:leading-[100px] leading-[75px]'> Development Agency</h1>
        <p className={`${styles.paragraph} max-w-[600px] mt-5 text-sm`}>{Content.headerContent}</p>
        <p className={`${styles.paragraph} max-w-[600px] mt-5 text-slate-400 duration-300 hover:text-sky-400 text-base`}>{Content.headerLastContent}</p>
      </div>

      <div className='w-[40%]'></div>
      
    </section>
)

export default Hero