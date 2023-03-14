import React from 'react';
import { HomeNav, Hero, Service, Support, Benefits, Help, Partner, Case, FAQ, FirstContactWidget, SecondContactWidget, ThirdContactWidget, Middle } from '../../home';
import Offer from '../../home/Offer';
import { styles } from '../../style';
import './Home.css'

function Home() {
  return (
    <>
    {/*Header */}
    <header className="w-full home-header">

        <div className={`${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <Hero/>
            </div>
        </div>

        <div className={`sticky top-0 z-50 ${styles.flexCenter}`}>
            <div className={` ${styles.boxWidth}`}>
                <HomeNav/>
            </div>
        </div>
    </header>

    <div className={`bg-first ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
            <Service/>
            <Support/>
        </div>
    </div>
    <FirstContactWidget />

    <div className={`bg-first ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
            {/*<Benefits/>*/}
        </div>
    </div>

    <div className={`bg-first ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
            {/*<Middle/>*/}
            <Help/>
        </div>
    </div>
    <SecondContactWidget />

    <div className={`bg-first ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
            <Partner/> 
        </div>
    </div>
    <ThirdContactWidget />

    <div className={`bg-first ${styles.flexStart}`}>
        <div className='w-full'>
            <Case/>
        </div>
    </div>

    <div className={`bg-first ${styles.paddingX} ${styles.paddingY} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
            <Offer/>
            <FAQ/>
        </div>
    </div>
    </>
  )
}

export default Home