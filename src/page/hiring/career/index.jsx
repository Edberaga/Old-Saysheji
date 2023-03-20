import React from 'react'
import Discuss from '../../../home/Discuss'
import { styles } from '../../../style'
import Content from './constant/career.json'
import './index.css'

const Career = ({ job, bg }) => {
  return (
    <>
    {
      Content.map((param, index) => {
        return(
          <>
          <section key={index} className="ss:w-[75%] w-full career-container ">
            {param[`${job}`].map((param, index) => (
              <section key={index}>
                <header 
                className={`h-[542px] w-full bg-cover ` }
                style={{ backgroundImage: `url(${bg})` }}
                />

                <div className="w-full sm:mb-16 mb-6 relative z-[1] px-4 py-2">
                  <h1 className='text-[28px] font-semibold py-3'>
                    {param.title}
                  </h1>

                  <div className="w-full md:mt-0 mt-6">
                  <p className={`text-base`}>{param.description}</p>
                    <h2 className='text-[22px] font-semibold py-3'>Job Description</h2>
                    <p className={`text-base`}>{param.about}</p>

                    <h2 className='text-[22px] font-semibold py-3'>Responsibilities</h2>
                    <p className={`text-base `}>Job scope include but are not limited to the following:</p>
                    <ul className='career-list'>
                      {param['responsibilities'].map((param, index) => (
                        <li key={index}>
                          {...param}
                        </li>
                      ))}
                    </ul>

                    <h2 className='text-[22px] font-semibold py-3'>Qualification</h2>
                    <p className={`text-base`}>{param.statement}</p>
                    <ul className='career-list'>
                      {param['qualification'].map((param, index) => (
                        <li key={index}>
                          {...param}
                        </li>
                      ))}
                    </ul>

                    <h2 className='text-[22px] font-semibold py-3'>Skill & Experience</h2>
                    <ul className='career-list'>
                      {param['skills'].map((param, index) => (
                        <li key={index}>
                          {...param}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5 w-full flex justify-center">
                    <Discuss  detail='Apply Now' link="/contact" />
                  </div>
                </div>
              </section>
            ))}
          </section>
          </>
        )
      })
    }
  </>
  )
}

export default Career