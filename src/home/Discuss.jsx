import React from 'react'
import { Link } from 'react-router-dom'

const Discuss = ({ styles, detail, link }) => {
  return (
    <Link to={link}>
      <button type='button' className={`py-4 px-10 bg-blue-gradient font-poppins font-medium
      text-[18px] text-first outline-none ${styles}`}>
          {detail}
      </button>
    </Link>
  )
}

export default Discuss