import React from 'react'
import Content from '../constant/homeContent.json'
import { partner } from '../constant'
import { styles, layout } from '../style'
import Discuss from './Discuss'

const PartnerSlick = ({title, img}) => {
    return(
        <div className=' mx-6'>
            <img src={img} alt={title} className='w-[180px]' />
        </div>
    )
}

const Partner = () => {
  return (
    <>
    <section className='text-center my-10'>
        <h1 className={styles.heading2}>{Content.partnerSectionTitle}</h1>
        <div className="w-full md:mt-10 mt-6">
          <p className={`${styles.paragraph} sm:mr-[5rem] mr-5 text-base`}>{Content.partnerSectionInfo}</p>
        </div>
    </section>

    <div className={`${layout.sectionImg} flex flex-row flex-wrap align-center justify-center mb-5`}>
        {partner.map((item) => (
          <PartnerSlick key={item.id} {...item} />
        ))}
    </div>

    <div className='flex w-full justify-center'>
        <Discuss styles={'mb-14'} detail='Know More' />
    </div>
    </>
  )
}

export default Partner