import React from 'react'
import { styles } from '../style'
import Content from '../constant/homeContent.json'
import Discuss from './Discuss'

const Middle = () => {
  return (
    <section className='my-20 '>
      <h1 className={styles.heading2}>{Content.heroSectionTitle}</h1>
      <div className="w-full flex justify-between items-start md:flex-row flex-col sm:mb-0 mb-6 relative z-[1]">
        <div className="w-full md:mt-10 mt-6">
          <p className={`${styles.paragraph} sm:mr-[5rem] mr-0 text-base`}>{Content.heroSectionInfo1}</p>
        </div>
        <div className="w-full md:mt-10 mt-6">
          <p className={`${styles.paragraph} sm:ml-[2.5rem] ml-0 text-base`}>{Content.heroSectionInfo2}</p>
        </div>
        
      </div>

      <Discuss styles='mt-10' detail='Learn More'/>
    </section>
  )
}

export default Middle