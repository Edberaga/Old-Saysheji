import React from 'react'
import { service } from '../constant'
import { styles } from '../style'
import Card from '../components/Card'
import Content from '../constant/homeContent.json'

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

      <div className="flex flex-wrap justify-start justify-center w-full feedback-container relative z-[1]">
        {service.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </section>
    </>
  )
}

export default Service