import React from 'react'
import { career } from '../../../constant'
import Content from './constant/career.json'
import { InternshipData } from '../careerData'
import ReactPlayer from 'react-player'
import Discuss from '../../../home/Discuss'

const Internship = () => {
  return (
    <>
    <header className='flex flex-col items-center text-center w-full'>
      <section className='font-poppins w-[100%] flex flex-col items-center pt-5'>
        <h1 className='font-semibold md:text-[55px] text-[43.5px] leading-[32px] my-8'>Internship at Saysheji</h1>
        <p className='m-auto'>{Content['about-internship']}</p>
        <ReactPlayer
          url='https://www.youtube.com/watch?v=pOFeNnGVbDo'
          controls = {true}
        />
      </section>
    </header>

      <section className='ss:w-[85%] w-full mx-auto font-poppins w-full py-2 px-2"'>
        <section className="py-5">
          {InternshipData.map((item, index) => {
            return (
              <section key={index} className='internship-section'>
                <h1 className="font-semibold sm:text-[33px] text-[23.5px] leading-[52px] my-2">
                  {item.title}
                </h1>
                <section className="flex sm:flex-row flex-col">
                  <div className='flex-1'>
                    <video
                      className=''
                      src={item.video}
                      controls
                    />
                  </div>
                  <div className='flex-1 px-3'>
                    <p className='text-[16.5px]'>{item.content}</p>
                    <p className='text-[16.5px] py-2'>{item.require}</p>
                    <div className="mt-2 ">
                      <Discuss styles='my-2' detail='Apply Now' link="/contact" />
                    </div>
                  </div>
                </section>
              </section>
            )
          })}

        </section>
      </section>
    </>
  )
}

export default Internship