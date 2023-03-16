import React from 'react'
import { styles } from '../../../style'
import Content from './constant/career.json'

const DiAcc = () => {
  return (
    <>
    <section>
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h1 className={styles.heading2}>{Content['digital-account-executive']}</h1>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} ss:text-right text-left sm:ml-[5rem] ml-0 text-base`}></p>
        </div>
      </div>
      <h1>Digital Account Executive</h1>
      <h2>About the job</h2>
    </section>
    </>
  )
}

export default DiAcc