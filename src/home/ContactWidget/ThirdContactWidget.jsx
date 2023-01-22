import React from 'react'
import { styles } from '../../style'
import Content from '../../constant/homeContent.json'
import './ContactWidget.css'
import Discuss from '../Discuss'

const ThirdContactWidget = () => {
  return (
    <section className='panel3 w-[100%] '>
    <div className={`flex-1 flex-wrap ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-col text-white justify-center items-start max-w-[650px] h-[250px]">
          <h1 className='font-poppins font-semibold ss:text-[32px] [26px] pb-4 '> 
          {Content.contactPanelTitle3} <br/>
          </h1>
          <p className="font-poppins text-base paragraph">{Content.contactPanelInfo3}</p>
          <Discuss styles="mt-10" detail='Discuss Your Project'/>
        </div>
    </div>

    <div className='w-[40%]'></div>
    </section>
  )
}

export default ThirdContactWidget