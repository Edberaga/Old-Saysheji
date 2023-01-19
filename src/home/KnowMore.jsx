import React from 'react'

const KnowMore = ({style, detail}) => {
  return (
    <button type='button' className={`py-4 px-8 bg-blue-border font-poppins font-medium
    text-[16px] text-white outline-none ${style}`}>
        {detail}
    </button>
  )
}

export default KnowMore