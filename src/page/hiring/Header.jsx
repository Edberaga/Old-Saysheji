import React from 'react'
import { Link } from 'react-router-dom'
import joinUsImg from '../../assets/img/join-us.svg'

const Header = () => {
  return (
    <header className='flex flex-col justify-between items-center text-center w-full'>
      <section className='w-full h-[515px] header-career-bg' />

      <section className='font-poppins w-full py-10'>
        <h1 className='font-semibold md:text-[55px] text-[43.5px] leading-[32px] my-8'>Career In Saysheji</h1>
        <p>We are always looking for passionate people to join us to take over the digital world. <br/>
          Check out the available positions below and send your resume to <span className='boss-mail'>kaseyfong@saysheji.com</span>
        </p>
      </section>

      {/*<section className='flex justify-center items-center h-[515px] p-10 px-15 text-center md:max-w-[650px] w-full'>
        <img src={joinUsImg} alt="join-us-saysheji" className='max-h-[265px] text-center'/>
      </section>*/}
    </header>
  )
}

export default Header