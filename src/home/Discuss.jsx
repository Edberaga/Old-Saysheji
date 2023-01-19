import React from 'react'

const Discuss = ({ styles, detail }) => {
  return (
    <button type='button' className={`py-4 px-10 bg-blue-gradient font-poppins font-medium
    text-[18px] text-primary outline-none ${styles}`}>
        {detail}
    </button>
  )
}

export default Discuss