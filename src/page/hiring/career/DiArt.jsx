import React from 'react'
import Career from '.'
import Img from '../../../assets/img/career/digital-designer-bg.jpeg'

const DiArt = () => {
  return (
    <>
    <section>
      <Career 
        job="digital-designer" 
        bg={Img} //Must no space... and '' quotation inside :/
      />
    </section>
  </>
  )
}

export default DiArt