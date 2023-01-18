import React from 'react';
import { HomeNav, Hero, Service, Support, Benefits, Help, Case, FAQ } from '../../home';
import { styles } from '../../style';
import './Home.css'

function Home() {
  return (
    <>
    {/*Header */}
    <header className="w-full overflow-hidden home-header">

        <div className={`${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <Hero/>
            </div>
        </div>

        <div className={` ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <HomeNav/>
            </div>
        </div>
    </header>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
            <Service/>
            <Support/>
            <Benefits/> 
            <Help/> 
            <Case/> 
            <FAQ/>
        </div>
    </div>
    </>
  )
}

export default Home