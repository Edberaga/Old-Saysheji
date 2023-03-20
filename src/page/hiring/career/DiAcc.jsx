import React from 'react'
import Career from '.'
import Img from '../../../assets/img/career/account-executive-bg.jpg'

const DiAcc = () => {
  return (
  <>
    <section>
      <Career 
        job="digital-account-executive" 
        bg={Img} //Must no space... and '' quotation inside :/
      />
    </section>
  </>
)}

export default DiAcc