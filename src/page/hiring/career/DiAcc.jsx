import React from 'react'
import { styles } from '../../../style'
import Content from './constant/career.json'

const DiAcc = () => {
  return (
  <>
    {
      Content.map((param, index) => {
        return(
          <>
          <section key={index} className="ss:w-[75%] w-full m-auto">
            {param['digital-account-executive'].map((param, index) => (
              <div key={index} className="w-full sm:mb-16 mb-6 relative z-[1]">
                <h1 className='text-[53px] font-semibold'>
                  {param.title}
                </h1>
                <div className="w-full md:mt-0 mt-6">
                  <h2 className='text-[34px] font-semibold'>About the Job</h2>
                  <p className={`text-base`}>{param.about}</p>

                  <h2 className='text-[34px] font-semibold'>Responsibilities</h2>
                  <p className={`text-base`}>Job scope include but are not limited to the following:</p>
                  <ul>
                    {param['responsibilities'].map((param, index) => (
                      <li key={index} className='list-disc list-inside'>
                        {...param}
                      </li>
                    ))}
                  </ul>

                  {/*
                  <h2 className='text-[34px] font-semibold'>Responsibilities</h2>
                  <p className={`text-base`}>Job scope include but are not limited to the following:</p>
                  <ul>
                    {param['requirements'].map((param, index) => (
                      <>
                      </>
                    ))}
                  </ul>*/}
                </div>
              </div>
            ))}
          </section>
          </>
        )
      })
    }
  </>
)}

export default DiAcc